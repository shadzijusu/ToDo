import { Observable } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToDo } from '../models/ToDo.model';
import { ToDos } from '../models/ToDos.model';

@Injectable({providedIn: 'root'})
export class ToDoService {
    constructor(private http: HttpClient) { }

    getAllTodos() : Observable<ToDos> {
        return this.http.get<ToDos>(`https://dummyjson.com/todos?limit=4&skip=10`);
    }
    getTodoById(id: number) : Observable<ToDo> {
        return this.http.get<ToDo>(`https://dummyjson.com/todos/${id}`);
    }
    
}