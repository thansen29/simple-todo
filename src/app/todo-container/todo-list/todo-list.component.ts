import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTodos from '../store/todos.reducer';
import { Task } from '../task.model';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms'
import * as moment from 'moment';

import * as todosActions from '../store/todos.actions';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoState: Observable<Task[]>;

  constructor(private store: Store<fromTodos.State>) { }

  ngOnInit() {
    this.todoState = this.store.select('todos');
  }

  addItems(form: NgForm) {
    const title = form.value.title;
    const description = form.value.description
    const createdAt = moment().format('MMMM Do, YYYY')
    this.store.dispatch(new todosActions.AddTask({ title, description, createdAt }))
    form.reset();


  }

}
