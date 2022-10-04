import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IconsModule } from './shared';
import { DashboardComponent } from './todos/dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './todos/layout/header/header.component';
import { AddNewTodoComponent } from './todos/todo/add-new-todo/add-new-todo.component';
import { AllTodosComponent } from './todos/todo/alltodos/all-todos/all-todos.component';
import { EditTodoComponent } from './todos/todo/edit-todo/edit-todo.component';
import { SearchComponent } from './todos/todo/search/search.component';
import { StatsComponent } from './todos/todo/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AllTodosComponent,
    EditTodoComponent,
    AddNewTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    IconsModule,
    RouterModule.forRoot([
      {path:'dashboard', component: AllTodosComponent},
      {path:'edit/:id', component: EditTodoComponent},
      {path: 'add', component: AddNewTodoComponent},
      {path: 'search', component: SearchComponent},
      {path: 'stats', component: StatsComponent},
      {path: '', redirectTo:'dashboard', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
