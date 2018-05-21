'use strict'

const Eos = require('eosjs');

const Prompt = require('prompt-password');


function getAuthonArray(transaction) {
    var auths = []
    var actions = transaction.transaction.actions;
    actions.forEach(action => {
        action.authorization.forEach(authorization => {
            var auth = authorization.actor + '@' + authorization.permission;
            if (auths.indexOf(auth) < 0) {
                auths.push(auth);
            }
        })
    })
    return auths;
}

function getPrivateKey(auth) {

    var prompt = new Prompt({
        type: 'password',
        message: '输入私钥:' + auth,
        name: 'privatekey'
    });
    return prompt.run();
}

/*
function pseries(list) {
    var p = Promise.resolve();
    return list.reduce(function (pacc, fn) {
        return pacc = pacc.then(fn);
    }, p);
}*/


function keyProvider(transaction) {
    console.log(JSON.stringify(transaction, null, 2));
    var auth_array = getAuthonArray(transaction);
    // return []; //'5xxxxxxxxxxxxxxxxxxxxxx' ;

    //pseries(auth_array.map(getPrivateKey))

    var auth_index = 0;
    var result = [];
    function getKey(){
        if( auth_index < auth_array.length){
            return getPrivateKey(auth_array[auth_index])
                .then( (pkey)=>{
                    result.push(pkey);
                    auth_index += 1;
                    return getKey();
                })
        }
        else 
            return result;
    }
    return getKey();
}

var jungleTestnet = Eos.Localnet({
    httpEndpoint: 'http://testnode.eos.magicw.net:8887',
    keyProvider: keyProvider
});

// jungleTestnet.getBlock();



jungleTestnet.getBlock(1).then(result => { console.log(result) })

jungleTestnet.getInfo({}).then(console.log);

jungleTestnet.getCurrencyBalance({
    code: 'eosio.token',
    account: 'amagicwallet',
    // symbol: 'EOS'
}).then(console.log);

jungleTestnet.transfer({
    from: 'imagicwallet',
    to: 'amagicwallet',
    quantity: '5 EOS',
    memo: 'hello world'
}).then(console.log)
    .catch(e => {
        console.error(e);
    })
