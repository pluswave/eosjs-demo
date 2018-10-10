'use strict'

const  eosInstance = require('./eos-instance');

eosInstance.rpc.get_account('testaccount1').then(
    x=>console.log(JSON.stringify(x,null,2)));


