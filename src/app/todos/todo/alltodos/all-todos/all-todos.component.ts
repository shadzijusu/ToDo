import { from, map, Observable } from 'rxjs';
import { ToDo } from 'src/app/core/models/ToDo.model';
import { ToDoService } from 'src/app/core/services/ToDoService.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent {

  toDos: ToDo[];
  constructor(private toDoService: ToDoService, private router:  Router) {
    this.toDos = JSON.parse(localStorage.getItem("todos") ||'[]') as ToDo[]
    /*
    this.toDo$ = this.toDoService.getAllTodos().pipe(
      map((todos) => todos.todos),
      map((todos) => {
        todos.forEach((todo) => {
          todo.title = "Title"
        })
        return todos;
      })   
       )
    */
    }


}
