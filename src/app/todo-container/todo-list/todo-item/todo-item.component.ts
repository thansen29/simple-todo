import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../task.model';
import { Store } from '@ngrx/store';
import * as fromUi from '../../../store/ui.reducer';
import * as uiActions from '../../../store/ui.actions';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;
  isOpen: boolean = false;

  constructor(private store: Store<fromUi.State>,
              private router: Router) { }

  ngOnInit() {
  }

  selectItem() {
    this.store.dispatch(new uiActions.OpenTask());
    this.isOpen = true;
    this.router.navigate([`/tasks/${this.index}`])
  }

}
