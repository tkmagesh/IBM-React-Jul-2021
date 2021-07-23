import axios from 'axios';

function getLocalBugs(){
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
}

function load(){
    const bugs = getLocalBugs();
    const action = { type : 'BUG_INIT', payload : bugs }
    return action;
}

export default load;