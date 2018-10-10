const eosjs = require('eosjs');
const fetch = require('node-fetch');  
const Prompt = require('prompt-password');
const ecc = require( "eosjs-ecc");

const {TextEncoder,TextDecoder} = require('util') 
// const { convertLegacyPublicKey } = require "./eosjs-numeric";


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

const my_keys = [{
   key: 'EOS5kdTT2HrgU8RmfSUqdXjbzfaiSF4xEeDFrwtA1XTEGbv8Hv6y3',
   auth: 'active@pluswavemagi'
}]

var signatureProvider = {
    getAvailableKeys: () => {
        return my_keys.map( i=>i.key);
    },
    sign: (args) => {
        let {chainId, requiredKeys, serializedTransaction} = args;
        if( requiredKeys.length > my_keys.length){
            throw 'not so much keys'
        }
        /* 
        if( requiredKeys[0] != my_keys[0].key ) {
            throw "have not the key " + requiredKeys[0];
        }*/
        const signBuf = Buffer.concat([
            new Buffer(chainId, "hex"), new Buffer(serializedTransaction), new Buffer(new Uint8Array(32)),
        ]);

        return getPrivateKey( my_keys[0].auth)
            .then( (pk)=>{
                return [ecc.Signature.sign(signBuf, pk).toString()];
            })
    }
}

// var sProvider2 = new eosjs.SignatureProvider(['5PrivateKeyStartWith5']);

/*
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
*/

var jungleRpc = new eosjs.Rpc.JsonRpc('https://jungle.eosio.cr', {fetch});

// const signatureProvider = new eosjs.SignatureProvider(keyProvider); //[defaultPrivateKey]);

/*
var jungleTestnet = eosjs({
    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
    httpEndpoint: 'https://jungle.eosio.cr',
    keyProvider: keyProvider
});
*/

const jungleTestnet = new eosjs.Api({ rpc: jungleRpc,
     signatureProvider /*:sProvider2*/
     ,textDecoder: new TextDecoder,
      textEncoder: new TextEncoder });

module.exports = jungleTestnet;
