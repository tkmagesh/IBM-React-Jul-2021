(function(){
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        let result = x + y;
        console.log(`   [@service] returning result`)
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`)
        let result = addSync(x,y);
        console.log(`[@client] result = ${result}`)
    }
    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            let result = x + y;
            console.log(`   [@service] returning result`)
            return result;
        }, 4000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] invoking the service`)
        let result = addAsync(x,y);
        console.log(`[@client] result = ${result}`)
    }
    window['addAsyncClient'] = addAsyncClient;
})()