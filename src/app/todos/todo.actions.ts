import { createAction, props } from '@ngrx/store';

export const crear = createAction(
   '[ToDo] Crear',
   props<{texto: string}>()
);
export const toggle = createAction('[ToDo] Toggle', props<{id: number}>());
export const editar = createAction('[ToDo] Editar', props<{id: number, texto: string}>());
export const borrar = createAction('[ToDo] Borrar', props<{id: number}>());
export const marcarTodo = createAction('[ToDo] Marcar todo', props<{completada: boolean}>());
export const limpiarCompletados = createAction('[ToDO] Limpiar completados');