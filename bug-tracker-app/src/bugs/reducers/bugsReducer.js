function bugsReducer(currentState = [], action){
    switch(action.type){
        case 'BUG_ADD':
            return [...currentState, action.payload];
        case 'BUG_REPLACE':
            const bugToReplace = action.payload;
            return currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
        case 'BUG_REMOVE':
            return currentState.filter(bug => bug.id !== action.payload.id)
        case 'BUG_INIT':
            return action.payload;
        default : 
            return currentState;
    }
}

export default bugsReducer;