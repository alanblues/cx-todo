import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as accionFiltro from '../../filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-footer-todo',
  templateUrl: './footer-todo.component.html',
  styleUrls: ['./footer-todo.component.scss']
})
export class FooterTodoComponent implements OnInit {
  filtroActual: accionFiltro.filtrosValidos = 'todas';
  filtros: accionFiltro.filtrosValidos[] = ['todas', 'completadas', 'pendientes'];
  pendientes: number = 0

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filter => this.filtroActual = filter);
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(p => !p.completada).length;
    });
  }

  pressCambiarFiltro(filtro: accionFiltro.filtrosValidos): void {
    this.store.dispatch(accionFiltro.setFiltro({ filtro }));
  }

  pressLimpiarCompletados(): void {
    this.store.dispatch(limpiarCompletados());
    
  }

}
