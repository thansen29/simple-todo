import { ActionReducerMap } from '@ngrx/store';
import * as fromTodos from '../todo-container/store/todos.reducer';
import * as fromUi from './ui.reducer';

export interface AppState {
  todos: fromTodos.State,
  ui: fromUi.State
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodos.todosReducer,
  ui: fromUi.uiReducer
};
