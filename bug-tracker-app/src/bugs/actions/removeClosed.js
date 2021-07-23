import remove from './remove';

function removeClosed(){
    return function (dispatch, getState){
        const bugs = getState().bugsState;
        const bugsToRemove = bugs.filter(bug => bug.isClosed)
        bugsToRemove.forEach(async bugToRemove => {
            const removeAction = await remove(bugToRemove)
            dispatch(removeAction);
        });        
    }
}
export default removeClosed;