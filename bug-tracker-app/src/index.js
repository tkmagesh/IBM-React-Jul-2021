import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './store';

import BugTracker from './bugs'
import Projects from './projects';

import axios from 'axios';
window['axios'] = axios;


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <h1>Bug Tracker</h1>
        <Projects/>
        <BugTracker/>
      </Provider>
    </React.StrictMode>, 
    document.getElementById('root')
);  

/* 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* ES6 Module Usage */

/* 
import * as calc from './calculator'
console.log(calc) 
*/

/* 
import * as calc from './calculator'
console.log(calc.add(100,200)) 
*/

/* 
import * as calc from './calculator'
const add = calc.add;
console.log(add(100,200)) 
*/

/* 
import * as calc from './calculator'
const { add } = calc;
console.log(add(100,200))
*/

/* 
import { add } from './calculator'
console.log(add(100,200)) 
*/

//importing default exported object
/* 
import myUtils from './calculator'
console.log(myUtils); 
*/