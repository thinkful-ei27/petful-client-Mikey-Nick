import { catActions } from '../actions/index.js';
const catInitialState = {
  data: null,
  error: null,
  loading: false
};

export const catReducer = (state = catInitialState, action) => {
  if (action.type === catActions.FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  }
  if (action.type === catActions.FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      data: catActions.cat
    })
  }
  if (action.type === catActions.FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: catActions.err
    })
  }
  if (action.type === catActions.ADOPT_CAT_SUCCESS)
    return Object.assign({}, state, {
      loading: false,
      data: null
    })
  if (action.type === catActions.ADOPT_CAT_ERROR)
    return Object.assign({}, state, {
      loading: false,
      error: catActions.err
    })

  return state;
}