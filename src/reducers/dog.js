import actions from '../actions/index.js';
const dogInitialState = {
  data: {
    imageURL: 'https://media.licdn.com/dms/image/C5103AQEv9ADgSV2xOg/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=nCEDVVxrTlsr2_6qEcGkjgzPEMh2w3m6a6G2j7Gl0SY',
    imageDescription: `He's a smiler!`,
    name: 'John',
    sex: 'Male',
    age: 5,
    breed: 'Marylander',
    story: 'Thinkful grad'
  },
  error: null,
  loading: false
};

const {dogActions} = actions;

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