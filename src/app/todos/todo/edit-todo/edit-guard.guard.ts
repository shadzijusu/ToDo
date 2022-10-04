import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { AddNewTodoComponent } from '../add-new-todo/add-new-todo.component';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable({providedIn: 'root'})
export class EditGuard implements CanDeactivate<AddNewTodoComponent> {
    canDeactivate(
        component: AddNewTodoComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        if (component.todoForm.dirty) {
            const taskName = component.todoForm.get('title')?.value || 'New Task';
            return confirm(`Navigate away and cancel creating Task: ${taskName}?`);
          }
        return false;
    }
}