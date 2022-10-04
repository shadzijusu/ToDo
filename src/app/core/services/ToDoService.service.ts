import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToDos } from '../models/ToDos.model';

@Injectable({providedIn: 'root'})
export class ToDoService {
    constructor(private http: HttpClient) { }


    getAllTodos() : Observable<ToDos> {
        return this.http.get<ToDos>(`https://dummyjson.com/todos`);
    }
    
}