import { API_BASE_URL } from '../config.js'


export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
    type: FETCH_DOG_SUCCESS,
    dog
});

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (error) => ({
    type: FETCH_DOG_ERROR,
    error
});

export const fetchDog = () => dispatch => {
    dispatch(fetchDogRequest());
    fetch(`${API_BASE_URL}/api/dog`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(dog => {
        dispatch(fetchDogSuccess(dog));
    }).catch(err => {
        dispatch(fetchDogError(err));
    })
};

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = () => ({
    type: ADOPT_DOG_SUCCESS
});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = (err) => ({
    type: ADOPT_DOG_ERROR,
    err
})

export const adoptDog = () => dispatch => {
    dispatch(fetchDogRequest());
    fetch(`${API_BASE_URL}/api/dog`, {
        method: 'DELETE'
    }).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(res => {
        dispatch(adoptDogSuccess(res));
    }).catch(err => {
        dispatch(adoptDogError(err));
    });
}

