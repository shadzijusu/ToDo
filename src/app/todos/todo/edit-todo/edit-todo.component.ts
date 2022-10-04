import { map, Observable } from 'rxjs';
import { ToDo } from 'src/app/core/models/ToDo.model';
import { ToDoService } from 'src/app/core/services/ToDoService.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  todoId: number;
  todo : ToDo | undefined;
  todos : ToDo[];
  constructor(private activeRoute: ActivatedRoute, private todoService: ToDoService, private router: Router) {
    this.todoId = this.activeRoute.snapshot.params['id'];
   // this.todo$ = this.todoService.getTodoById(this.todoId);
   this.todos = JSON.parse(localStorage.getItem("todos") ||'[]') as ToDo[];
   this.todo = this.todos.find((todo) => todo.id == this.todoId)

   }

  ngOnInit(): void {
  }
  completeTask() {
 /*   this.todo$ = this.todo$.pipe(
      map((todo) => {
        todo.completed = true
        return todo
      })
    )*/
    this.todos.forEach((todo) => {
      if(todo.id !== this.todoId) {
        todo.completed = true
      }
    })
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.router.navigate([`/dashboard`])

}
 deleteTask() {
  this.todos = this.todos.filter((todo) => todo.id != this.todoId)
  console.log(this.todos)

  localStorage.setItem("todos", JSON.stringify(this.todos));

  this.router.navigate([`/dashboard`])
 }
}