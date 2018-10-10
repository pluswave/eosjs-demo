'use strict'

const  eosInstance = require('./eos-instance');

eosInstance.rpc.history_get_actions('testaccount1').then( a=>console.log(JSON.stringify(a,null,2)) );

