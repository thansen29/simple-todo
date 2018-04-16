import * as TodosActions from './todos.actions';
import { Task } from '../task.model';
import * as _ from 'lodash';

export interface State {
  tasks: Task[]
}

const initialState: State = {
  tasks: [
    new Task(
      'Buy Milk',
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

    case TodosActions.DELETE_TASKS:
      const indices = action.payload;
      const tasks = [...state.tasks];
      const total = [];
      _.forEach(tasks, (task, index) => {
        if (!indices.includes(index)) {
          total.push(task);
        }
      });
      return {
        ...state,
        tasks: total
      };
    default:
      return state;
  }
}
