import { createStore } from 'redux';
//import bugsReducer  from '../bugs/reducers/bugsReducer';

//const store = createStore(bugsReducer)

import projectsReducer from '../projects/reducers/projectsReducer';
const store = createStore(projectsReducer);

export default store;