import { Action } from '@ngrx/store';

export const ADD_TASK = 'ADD_TASK';

export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: { title: string, description: string, createdAt: string }) {}
}

export type TodosActions = (
  AddTask
);
