import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FooterTodoComponent } from './footer-todo/footer-todo.component';
import { ItemTodoComponent } from './item-todo/item-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { PageTodoComponent } from './page-todo/page-todo.component';

// ReactiveForm
import { ReactiveFormsModule } from '@angular/forms';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [
    AddTodoComponent,
    FooterTodoComponent,
    ItemTodoComponent,
    ListTodoComponent,
    PageTodoComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  // Componentes que seran visibles fuera de este modulo
  exports: [PageTodoComponent]
})
export class TodoModule { }
