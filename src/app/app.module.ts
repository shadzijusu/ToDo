import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IconsModule } from './shared';
import { DashboardComponent } from './todos/dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './todos/layout/header/header.component';
import { EditTodoComponent } from './todos/todo/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IconsModule,
    RouterModule.forRoot([
      {path:'dashboard', component: DashboardComponent},
      {path:'edit/:id', component: EditTodoComponent},
      {path: '', redirectTo:'dashboard', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
