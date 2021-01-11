import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Todo } from '../models/todo.model';
import * as accion from '../todo.actions';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.scss']
})
export class ItemTodoComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') inputFisico: ElementRef;
  chkCompletado: FormControl;
  txtInput: FormControl;
  editando = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completada);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(accion.toggle({ id: this.todo.id }));
    });
  }

  pressEditar(id: number): void {
    this.editando = true;
    setTimeout(() => {
      // this.inputFisico.nativeElement.focus();
      this.inputFisico.nativeElement.select();
    }, 1);
  }

  pressTerminarEdicion(): void {
    this.editando = false;
    if (this.txtInput.value.trim() == '') {
      this.txtInput.setValue(this.todo.texto);
      return;
    }
    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) { return; }
    this.store.dispatch(accion.editar({ id: this.todo.id, texto: this.txtInput.value }));
  }

  pressBorrar(): void {
    this.store.dispatch(accion.borrar({ id: this.todo.id }))
  }

}
