import { createReducer, on } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { Todo } from './models/todo.model';
import * as accion from './todo.actions';

const estadoInicial: Todo[] = [
   new Todo('Salvar al mundo'),
   new Todo('Vencer a Thanos'),
   new Todo('Comprar traje de Ironman'),
   new Todo('Robar el escudo de Capitan America')
];

const _todoReducer = createReducer(
   estadoInicial,
   on(accion.crear, (state, { texto }) => state = [...state, new Todo(texto)]),
   on(accion.toggle, (state, { id }) => {
      return state.map(todo => {
         if (todo.id === id) {
            return {
               ...todo,
               completada: !todo.completada
            }
         } else {
            return todo;
         }
      })
   }),
   on(accion.editar, (state, {id, texto}) => {
      return state.map(todo => {
         if (todo.id === id) {
            return {
               ...todo,
               texto
            }
         } else {
            return todo;
         }
      })
   }),
   on(accion.borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
   on(accion.marcarTodo, (state, {completada}) => 
       state.map(todo => {
         return {
            ...todo,
            completada: completada
         }
      })
   ),
   on(accion.limpiarCompletados, (state) => state.filter(c => !c.completada))
   // on(accion.borrarCompletados, (state) => {
   //    return state.filter(comp => !comp.completada);
   // })
);

export function todoReducer(state, action) {
   return _todoReducer(state, action);
}