//import axios from 'axios';
import bugApi from '../services/bugApi'

/* function getLocalBugs(){
    return [
        {
            id : 1,
            name : 'Local Bug - 1',
            createdAt : new Date(),
            isClosed : false,
            projectId : 1
        },
        {
            id : 2,
            name : 'Local Bug - 2',
            createdAt : new Date(),
            isClosed : true,
            projectId : 1
        },
    ]
} */

/* function load(){
    return function(dispatch){
        axios.get('http://localhost:3030/bugs')
            .then(response => response.data)
            .then(bugs => {
                const action = { type : 'BUG_INIT', payload : bugs }
                dispatch(action);
            });
    }
}
*/

/* using asyncMiddleware */
/* function load(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3030/bugs')
        const bugs = response.data
        const action = { type : 'BUG_INIT', payload : bugs }
        dispatch(action);
    }
} */

/* async function load(){
    const response = await axios.get('http://localhost:3030/bugs')
    const bugs = response.data
    const action = { type : 'BUG_INIT', payload : bugs }
    return action;
} */

async function load(){
    const bugs = await bugApi.getAll()
    const action = { type : 'BUG_INIT', payload : bugs }
    return action;
}


export default load;