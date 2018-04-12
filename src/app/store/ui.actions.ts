import { Action } from '@ngrx/store';

export const OPEN_TASK = 'OPEN_TASK';
export const CLOSE_TASK = 'CLOSE_TASK';

export class OpenTask implements Action {
  readonly type = OPEN_TASK;
}

export class CloseTask implements Action {
  readonly type = CLOSE_TASK;
}

export type UiActions = (
  OpenTask |
  CloseTask
);
