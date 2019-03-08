import { dogActions } from '../actions/index.js';
const dogInitialState = {
  data: null,
  error: null,
  loading: false
};

export const dogReducer = (state = dogInitialState, action) => {
  if (action.type === dogActions.FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  }
  if (action.type === dogActions.FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      data: dogActions.dog
    })
  }
  if (action.type === dogActions.FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: dogActions.err
    })
  }
  if (action.type === dogActions.ADOPT_DOG_SUCCESS)
    return Object.assign({}, state, {
      loading: false,
      data: null
    })
  if (action.type === dogActions.ADOPT_DOG_ERROR)
    return Object.assign({}, state, {
      loading: false,
      error: dogActions.err
    })

  return state;
}