import actions from '../actions/index.js';
const catInitialState = {
  data: {
    imageURL: 'blah',
    imageDescription: 'blah',
    name: 'blah',
    sex: 'blah',
    age: 'blah',
    breed: 'blah',
    story: 'blah',
  },
  error: null,
  loading: false
};

const { catActions } = actions;

export const catReducer = (state = catInitialState, action) => {
  if (action.type === catActions.FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: false
    })
  }
  if (action.type === catActions.FETCH_CAT_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      loading: false,
      data: action.cat,
      error: false
    })
  }
  if (action.type === catActions.FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: true
    })
  }
  if (action.type === catActions.ADOPT_CAT_SUCCESS)
    return Object.assign({}, state, {
      loading: true,
      data: null,
      error: false
    })
  if (action.type === catActions.ADOPT_CAT_ERROR)
    return Object.assign({}, state, {
      loading: false,
      error: true
    })

  return state;
}