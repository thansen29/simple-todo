import * as TodosActions from './todos.actions';
import { Task } from '../task.model';

export interface State {
  tasks: Task[]
}

const initialState: State = {
  tasks: [
    new Task(
      'Buy Milkasda asd asd asdas asda asdas asd',
      '2% milk. If they dont have that then get vanilla soy milk. I usually get silk brand but it doesnt really matter i guess',
      'April 12, 2018'
    ),
    new Task(
      'Wash clothes',
      'with bleach',
      'April 12, 2018'
    ),
  ]
};


export function todosReducer(state = initialState, action: TodosActions.TodosActions) {
  switch (action.type) {
    case TodosActions.ADD_TASK:
      const newTask = action.payload;
      const task = new Task(newTask.title, newTask.description, newTask.createdAt);
      const newTasks = [...state.tasks, task];
      return {
        ...state,
        tasks: newTasks
      }
    default:
      return state;
  }
}
