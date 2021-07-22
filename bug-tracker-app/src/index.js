import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './store';
import BugTracker from './bugs'
import bugActionCreators from './bugs/actions';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);

function renderApp(){
    const bugs = store.getState();
    ReactDOM.render(
        <React.StrictMode>
          <BugTracker bugs={bugs} {...bugActionDispatchers}/>
        </React.StrictMode>, 
        document.getElementById('root')
    );
}
renderApp();
store.subscribe(renderApp);
  

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