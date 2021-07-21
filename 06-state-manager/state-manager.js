const StateManager = (function(){
    let _currentState = undefined,
        _subscriptions = [],
        _reducer = null,
        _init_action = { type : '@@INIT/ACTION' };

    function getState(){
        return _currentState;
    }

    function subscribe(listenerFn){
        _subscriptions.push(listenerFn)
    }

    //private utility function
    function notifyChanges(){
        _subscriptions.forEach(listenerFn => listenerFn())
    }

    function dispatch(action){
        //call the reducer
        const newState = _reducer(_currentState, action);

        //update the currentState if a new state is returned by the reducer
        if (newState === _currentState) return;
        _currentState = newState;

        //notify changes
        notifyChanges();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function') 
            throw new Error('Invalid arguments! A reducer is mandatory to create the store');
        _reducer = reducer;

        //to initialize the current state with the valid default state (other than undefined)
        _currentState = _reducer(undefined, _init_action);
        
        const store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})()