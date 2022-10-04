import { combineLatest, map, Observable, switchMap, take } from 'rxjs';
import { ToDo } from 'src/app/core/models/ToDo.model';
import { ToDos } from 'src/app/core/models/ToDos.model';
import { ToDoService } from 'src/app/core/services/ToDoService.service';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toDo$: Observable<ToDo[]>;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  selectedOption : string = ""
  constructor(private toDoService: ToDoService, private router: Router) {
    this.toDo$ = this.toDoService.getAllTodos().pipe(
      map((todos) => todos.todos),
      map((todos) => {
        todos.forEach((todo) => {
          todo.title = "Title"
        })
        return todos;
      })   
       ) }

  ngOnInit(): void {
  }
 

}
