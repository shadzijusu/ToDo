import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot
} from '@angular/router';

import { EditTodoComponent } from './edit-todo.component';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable({providedIn: 'root'})
export class EditGuard implements CanDeactivate<EditTodoComponent> {
    constructor(private router: Router
        ) {}
    canDeactivate(
        component: EditTodoComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        if (component.todoForm.dirty) {
            const taskName = component.todoForm.get('title')?.value || 'New Task';
            return confirm(`Navigate away and cancel editing Task: ${taskName}?`);
          }
      
        return false;
    }
}