import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromTodos from '../store/todos.reducer';
import { Task } from '../task.model';

@Component({
  selector: 'task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit, OnDestroy {
  allTasks: Observable<fromTodos.State>;
  task: Task;
  subscription: Subscription;
  routeSubscription: Subscription

  constructor(private store: Store<fromApp.AppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.allTasks = this.store.select('todos');

    this.routeSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.subscription = this.allTasks.subscribe(
          (state) => {
            this.task = state.tasks[+params['id']];
          }
        )
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
