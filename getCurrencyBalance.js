'use strict'

const  eosInstance = require('./eos-instance');

eosInstance.rpc.get_currency_balance(
   'eosio.token',
   'pluswavemagi',
   'EOS'
).then(console.log);


eosInstance.rpc.get_currency_balance(   'eosio.token',
'pluswavemagi',
).then(console.log);
