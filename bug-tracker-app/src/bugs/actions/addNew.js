//TO BE FIXED
let _currentBugId = 0;

function addNew(newBugName, projectId){
    const newBug = { 
        id : ++_currentBugId,
        name : newBugName,
        isClosed : false,
        createdAt : Date(),
        projectId : projectId,
    };
    const action = { type : 'BUG_ADD', payload : newBug}
    return action;
}
export default addNew;