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
      return {
        ...state,
        isOpen: true
      }
    case UiActions.CLOSE_TASK:
      return {
        ...state,
        isOpen: false
      }
    default:
      return state;
  }
}
