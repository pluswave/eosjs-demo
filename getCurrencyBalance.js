'use strict'

const  eosInstance = require('./eos-instance');

eosInstance.getCurrencyBalance({
    code: 'eosio.token',
    account: 'testaccount1',
    symbol: 'EOS'
}).then(console.log);


eosInstance.getCurrencyBalance({
    code: 'eosio.token',
    account: 'testaccount1',
}).then(console.log);
