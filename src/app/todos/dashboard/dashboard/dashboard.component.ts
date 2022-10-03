import { map, Observable } from 'rxjs';
import { ToDo } from 'src/app/core/models/ToDo.model';
import { ToDos } from 'src/app/core/models/ToDos.model';
import { ToDoService } from 'src/app/core/services/ToDoService.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toDo$: Observable<ToDo[]>;
  constructor(private toDoService: ToDoService) {
    this.toDo$ = this.toDoService.getAllTodos().pipe(
      map((todos) => todos.todos)
    );
   }

  ngOnInit(): void {
  }

}
