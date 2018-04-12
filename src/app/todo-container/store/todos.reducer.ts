import * as TodosActions from './todos.actions';

export interface State {
  title: string;
  description: string;
  createdAt: string;
}

const initialState: State = {
  title: 'Buy Milk',
  description: '2% only',
  createdAt: 'April 12, 2018'
};


export function todosReducer(state = initialState, action: TodosActions.TodosActions) {
  switch (action.type) {
    case TodosActions.ADD_TASK:
      break;
    default:
      return state;
  }
}
