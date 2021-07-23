import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer  from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});

/* function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type)
            console.log('Before -> ', store.getState())
            console.log(action)
            next(action);
            console.log('After -> ', store.getState())
            console.groupEnd();
        }
    }
}

function asyncMiddleware(store){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(store.dispatch);
            }
            return next(action);
        }
    }
} */

function promiseMiddleware(store){
    return function(next){
        return function(action){
            if (action instanceof Promise){
                return action.then(actionObj => store.dispatch(actionObj));
            } else {
                return next(action);
            }
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk, promiseMiddleware));

export default store;