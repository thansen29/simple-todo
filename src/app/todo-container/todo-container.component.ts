import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store'

import * as fromTodos from './store/todos.reducer';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todoState: Observable<fromTodos.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.todoState = this.store.select('todos');
  }

}
