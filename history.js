'use strict'

const  eosInstance = require('./eos-instance');

eosInstance.getActions({
    account_name: 'testaccount1'
}).then( a=>console.log(JSON.stringify(a,null,2)) );

