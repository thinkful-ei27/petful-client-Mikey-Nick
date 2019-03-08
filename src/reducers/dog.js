import actions from '../actions/index.js';
const dogInitialState = {
  data: {
    imageURL: 'blah',
    imageDescription: 'blah',
    name: 'blah',
    sex: 'blah',
    age:'blah',
    breed: 'blah',
    story: 'blah',
  },
  error: null,
  loading: false
};

const {dogActions} = actions;

export const dogReducer = (state = dogInitialState, action) => {
  if (action.type === dogActions.FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: false
    })
  }
  if (action.type === dogActions.FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      data: action.dog,
      error: false
    })
  }
  if (action.type === dogActions.FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: true
    })
  }
  if (action.type === dogActions.ADOPT_DOG_SUCCESS)
    return Object.assign({}, state, {
      loading: true,
      data: null,
      error: false
    })
  if (action.type === dogActions.ADOPT_DOG_ERROR)
    return Object.assign({}, state, {
      loading: false,
      error: true
    })

  return state;
}