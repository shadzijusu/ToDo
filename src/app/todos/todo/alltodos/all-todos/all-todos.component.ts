import { from, map, Observable, startWith, Subject } from 'rxjs';
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
  categories = ["Completed", "Not completed"]
  selectedCategory = ""
  toDos: ToDo[];
  originalToDos : ToDo[];
  constructor(private toDoService: ToDoService, private router:  Router) {
    this.toDos = JSON.parse(localStorage.getItem("todos") ||'[]') as ToDo[]
    this.originalToDos = this.toDos;
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
   
    onSelected(category: string) : void {
      this.selectedCategory = category;
      this.toDos = this.originalToDos
      let completed = false
      if(category != "0") {
      if(category == "Completed") {
        completed = true
      }
      this.toDos = this.toDos.filter((todo) => todo.completed == completed)
      }
      else {
        this.toDos = this.originalToDos
      }
    }
}
