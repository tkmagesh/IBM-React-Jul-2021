/* function remove(bugToRemove){
    const action = { type : 'BUG_REMOVE', payload : bugToRemove };
    return action;
} */

import bugApi from '../services/bugApi';
async function remove(bugToRemove){
    await bugApi.remove(bugToRemove);
    const action = { type : 'BUG_REMOVE', payload : bugToRemove };
    return action;
}

export default remove;