import { map, Observable } from 'rxjs';
import { ToDo } from 'src/app/core/models/ToDo.model';
import { ToDoService } from 'src/app/core/services/ToDoService.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  todoForm: FormGroup;
  todoId: number;
  todo : ToDo | undefined;
  todos : ToDo[];
  constructor(private activeRoute: ActivatedRoute,  private router: Router,
    private formBuilder: FormBuilder) {
    this.todoId = this.activeRoute.snapshot.params['id'];
   // this.todo$ = this.todoService.getTodoById(this.todoId);
   this.todos = JSON.parse(localStorage.getItem("todos") ||'[]') as ToDo[];
   this.todo = this.todos.find((todo) => todo.id == this.todoId)
   this.todoForm = this.formBuilder.group({
    title: [this.todo?.title, [Validators.required]],
    todo: [this.todo?.todo, [Validators.required]]
  })
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
 saveChanges() {
  this.todos.forEach((todo) => {
    if(todo.id == this.todoId) {
      todo.title = this.todoForm.get("title")?.value
      todo.todo = this.todoForm.get("todo")?.value
    }
  })
  localStorage.setItem("todos", JSON.stringify(this.todos));

  this.router.navigate([`/dashboard`])
 }
}