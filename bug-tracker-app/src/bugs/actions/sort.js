function sort(attrName, isDesc = false){
    return function(dispatch, getState){
        const bugs = getState().bugsState;
        let comparer = getComparerFor(attrName);
        if(isDesc){
            comparer = getDescComparerFor(comparer);
        }
        bugs.sort(comparer);
        const action = { type : 'BUG_INIT', payload : [...bugs] };
        dispatch(action);
    }
}

function getComparerFor(attrName){
    return function(o1, o2){
        return o1[attrName] > o2[attrName] ? 1 : -1;
    }
}

function getDescComparerFor(comparer){
    return function(o1, o2){
        return comparer(o1, o2) * -1;
    }
}

export default sort;