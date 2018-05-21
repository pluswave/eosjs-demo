'use strict'

const  eosInstance = require('./eos-instance');

eosInstance.getActions({
    account_name: 'zzb'
}).then( a=>console.log(JSON.stringify(a,null,2)) );

