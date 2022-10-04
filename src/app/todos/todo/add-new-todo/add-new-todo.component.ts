import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.scss']
})
export class AddNewTodoComponent implements OnInit {
  todoForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      todo: ['']
    })
  }
  createTodo() {
    let existingTodos = JSON.parse(localStorage.getItem("todos") || '[]')
    existingTodos.push({
      id: getRandomInt(100),
      title: this.todoForm.get("title")?.value,
      todo: this.todoForm.get("todo")?.value,
      completed: false
    })
    localStorage.setItem("todos", JSON.stringify(existingTodos));
    this.router.navigate([`/dashboard`])

  }
  ngOnInit(): void {
  }

}
