import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task;
  constructor() { }

  ngOnInit() {
  }

}
