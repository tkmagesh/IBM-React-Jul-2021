function removeClosed(bugs /* TO BE FIXED */){
    const bugsToRetain = bugs.filter(bug => !bug.isClosed)
    const action = { type : 'BUG_INIT', payload : bugsToRetain };
    return action;
}
export default removeClosed;