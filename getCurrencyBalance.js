'use strict'

const  eosInstance = require('./eos-instance');

eosInstance.rpc.get_currency_balance(
   'eosio.token',
   'yoafkunfjhoo',
   'TNT'
).then(console.log);


eosInstance.rpc.get_currency_balance(   'eosio.token',
'yoafkunfjhoo',
).then(console.log);
