import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTodos from '../store/todos.reducer';
import * as fromApp from '../../store/app.reducer';
import { Task } from '../task.model';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms'
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';

import * as todosActions from '../store/todos.actions';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoState: Observable<fromTodos.State>;

  checkedIndices = [];

  constructor(private store: Store<fromApp.AppState>,
              private router: Router,
              private route: ActivatedRoute) { }

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

  selectItem(index: number) {
    if (this.checkedIndices.includes(index)) {
      this.checkedIndices = this.checkedIndices.splice(index, 1);
    } else {
      this.checkedIndices.push(index);
    }
  }

  deleteItems() {
    this.store.dispatch(new todosActions.DeleteTasks(this.checkedIndices));
    this.checkedIndices = [];
    this.router.navigate(['/']);
  }

}
