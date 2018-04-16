import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromTodos from '../store/todos.reducer';
import { Task } from '../task.model';

@Component({
  selector: 'task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit, OnDestroy {
  allTasks: Observable<fromTodos.State>;
  task: Task;
  subscription: Subscription;
  routeSubscription: Subscription

  constructor(private store: Store<fromTodos.State>,
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
    )

  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  // need to un select when clicking another item
  // need to listen for route changing to update the item in view

}
