import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dashboard from './Dashboard.js';
import store from './store.js';
import { Provider } from 'react-redux';

const catToAdopt = {
  imageURL: 'https://media.licdn.com/dms/image/C4D03AQHZ-6yyqVB_mA/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=03_sR7NHm_oHgyV-dRjHQ_gtVsQzMZKZjkoJPRRDaI4',
  imageDescription: `Look hes chillen!`,
  name: 'Peter',
  sex: 'Male',
  age: 6,
  breed: 'NorEaster',
  story: 'Thinkful grad'
};
const dogToAdopt = {
  imageURL: 'https://media.licdn.com/dms/image/C5103AQEv9ADgSV2xOg/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=nCEDVVxrTlsr2_6qEcGkjgzPEMh2w3m6a6G2j7Gl0SY',
  imageDescription: `He's a smiler!`,
  name: 'John',
  sex: 'Male',
  age: 5,
  breed: 'Marylander',
  story: 'Thinkful grad'
};

const combined = { catToAdopt, dogToAdopt };

ReactDOM.render(
  <Provider store={store}>
    <Dashboard catToAdopt={catToAdopt} dogToAdopt={dogToAdopt} />
  </Provider>
  , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
