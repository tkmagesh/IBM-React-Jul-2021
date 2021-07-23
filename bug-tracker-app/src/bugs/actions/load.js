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
    /* loading bugs from the server */
    axios.get('http://localhost:3030/bugs')
        .then(response => response.data)
        .then(bugs => console.table(bugs));
        
    const bugs = getLocalBugs();
    const action = { type : 'BUG_INIT', payload : bugs }
    return action;
}

export default load;