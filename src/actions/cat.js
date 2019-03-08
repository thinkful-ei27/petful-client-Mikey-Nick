import { API_BASE_URL } from '../config.js'
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
   type: FETCH_CAT_SUCCESS,
   cat
});

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
    type: FETCH_CAT_ERROR,
    error
});

export const fetchCat = () => dispatch => {
  console.log('FetchCat was called');
  dispatch(fetchCatRequest());
  fetch(`${API_BASE_URL}/api/cat`).then(res => {
      if(!res.ok){
          return Promise.reject(res.statusText);
      }
      return res.json();
  }).then(cat => {
      dispatch(fetchCatSuccess(cat));
  }).catch(err => {
      dispatch(fetchCatError(err));
  })
} 

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
    type: ADOPT_CAT_SUCCESS
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = (err) => ({
    type: ADOPT_CAT_ERROR,
    err
})

export const adoptCat = () => dispatch => {
    dispatch(fetchCatRequest());
    fetch(`${API_BASE_URL}/api/cat`, {
        method: 'DELETE'
    }).then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        dispatch(adoptCatSuccess(res));
        return dispatch(fetchCat());
    }).catch(err => {
        return dispatch(adoptCatError(err));
    });
}