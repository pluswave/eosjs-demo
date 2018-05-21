const Eos = require('eosjs');

const Prompt = require('prompt-password');


function getAuthArray(transaction) {
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
        message: 'please input private key for ' + auth + ':',
        name: 'privatekey'
    });
    return prompt.run();
}

function keyProvider(transaction) {
    console.log(JSON.stringify(transaction, null, 2));
    var auth_array = getAuthArray(transaction);

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

module.exports = jungleTestnet;