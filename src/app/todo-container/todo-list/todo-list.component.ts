import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTodos from '../store/todos.reducer';
import { Task } from '../task.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoState: Observable<fromTodos.State>;
  constructor(private store: Store<fromTodos.State>) { }

  ngOnInit() {
    this.todoState = this.store.select('todos');
  }

}
