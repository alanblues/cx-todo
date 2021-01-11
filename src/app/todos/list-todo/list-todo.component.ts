import { Component } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent {
  todos: Todo[];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) {
    // this.store.select('todos').subscribe(todos => this.todos = todos );

    // this.store.subscribe(state => {
    this.store.subscribe(({todos, filtro}) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }
}
