import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

const initState: filtrosValidos = 'todas';

const _filtroReducer = createReducer(initState,
   on(setFiltro, (state: filtrosValidos, { filtro }) => filtro)
);

export function filtroReducer(state, action) {
   return _filtroReducer(state, action);
}