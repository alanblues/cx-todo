import { Component } from '@angular/core';

// NgRx
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { marcarTodo } from '../todo.actions';

@Component({
  selector: 'app-page-todo',
  templateUrl: './page-todo.component.html',
  styleUrls: ['./page-todo.component.scss']
})
export class PageTodoComponent {
  completadas: boolean = false;

  constructor(private store: Store<AppState>) { }

  pressMarcarTodos(): void {
    this.completadas = !this.completadas;
    this.store.dispatch(marcarTodo({completada: this.completadas}));
  }
}
