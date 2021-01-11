import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completadas':
        return todos.filter(comp => comp.completada);
      case 'pendientes':
        return todos.filter(comp => !comp.completada);
      default:
        return todos;
    }
    return todos;
  }

}
