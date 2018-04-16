import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store'
import * as fromTodos from './store/todos.reducer';

@Component({
  selector: 'todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todoState: Observable<any>;

  constructor(private store: Store<fromTodos.State>) { }

  ngOnInit() {
    this.todoState = this.store.select('todos');
  }

}
