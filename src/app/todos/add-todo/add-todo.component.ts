import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// NgRx
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as accion from '../todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html'
})
export class AddTodoComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  pressAgregar():void {
    if (this.txtInput.invalid || this.txtInput.value.trim() === '') { return; }
    this.store.dispatch(accion.crear({texto: this.txtInput.value.trim()}));
    this.txtInput.reset();
  }

}
