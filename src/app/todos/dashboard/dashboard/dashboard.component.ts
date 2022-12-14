
import { combineLatest, map, Observable, switchMap, take } from 'rxjs';
import { ToDo } from 'src/app/core/models/ToDo.model';
import { ToDoService } from 'src/app/core/services/ToDoService.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent   {
  toDo$: Observable<ToDo[]>;
  constructor(private toDoService: ToDoService, private router:  Router) {
    this.toDo$ = this.toDoService.getAllTodos().pipe(
      map((todos) => todos.todos),
      map((todos) => {
        todos.forEach((todo) => {
          todo.title = "Title"
        })
        return todos;
      })   
       ) }

  
 openEditPage(todoId: number) {
 
 }

}
