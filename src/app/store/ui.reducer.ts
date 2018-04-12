import * as UiActions from './ui.actions';

export interface State {
  isOpen: boolean
}

const initialState: State = {
  isOpen: false
};


export function uiReducer(state = initialState, action: UiActions.UiActions) {
  switch (action.type) {
    case UiActions.OPEN_TASK:
      break;
    case UiActions.CLOSE_TASK:
      break
    default:
      return state;
  }
}
