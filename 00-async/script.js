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

    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            let result = x + y;
            console.log(`   [@service] returning result`)
            callback(result);
        }, 4000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] invoking the service`)
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`)
        });
    }
    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                let result = x + y;
                console.log(`   [@service] returning result`)
                resolveFn(result);
            }, 4000);
        });
        return p;
    }

    window['addAsyncPromise'] = addAsyncPromise;

   
    /* function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        var p = addAsyncPromise(100,200)
        p.then(function(result){
            console.log(`[@client] result = ${result}`)
        })
    }
 */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        var result = await addAsyncPromise(100,200)
        console.log(`[@client] result = ${result}`)
        let doubleResult = result * 2;
        return doubleResult;
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

})()