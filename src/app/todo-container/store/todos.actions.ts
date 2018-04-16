import { Action } from '@ngrx/store';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASKS = 'DELETE_TASKS';

export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: { title: string, description: string, createdAt: string }) {}
}

export class DeleteTasks implements Action {
  readonly type = DELETE_TASKS;

  constructor(public payload: indices: number[]) {}
}

export type TodosActions = (
  AddTask |
  DeleteTasks
);
