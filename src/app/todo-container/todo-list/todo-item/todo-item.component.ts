import { Component, OnInit, Input } from '@angular/core';
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
  isOpen: boolean = false;

  constructor(private store: Store<fromUi.State>) { }

  ngOnInit() {
  }

  selectItem() {
    this.store.dispatch(new uiActions.OpenTask());
    this.isOpen = true;
  }

}
