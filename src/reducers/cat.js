import actions from '../actions/index.js';
const catInitialState = {
  data: {
    imageURL: 'https://media.licdn.com/dms/image/C4D03AQHZ-6yyqVB_mA/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=03_sR7NHm_oHgyV-dRjHQ_gtVsQzMZKZjkoJPRRDaI4',
    imageDescription: `Look hes chillen!`,
    name: 'Peter',
    sex: 'Male',
    age: 6,
    breed: 'NorEaster',
    story: 'Thinkful grad'
  },
  error: null,
  loading: false
};

const { catActions } = actions;

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