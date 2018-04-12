import * as TodosActions from './todos.actions';
import { Task } from '../task.model';

export interface State {
  tasks: Task[]
}

const initialState: State = {
  tasks: [
    new Task(
      'Buy Milk',
      'Only 2%',
      'April 12, 2018'
    ),
    new Task(
      'Wash clothes',
      'with bleach',
      'April 12, 2018'
    )
  ]
};


export function todosReducer(state = initialState, action: TodosActions.TodosActions) {
  switch (action.type) {
    case TodosActions.ADD_TASK:
      break;
    default:
      return state;
  }
}
