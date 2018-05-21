'use strict'

const  eosInstance = require('./eos-instance');

eosInstance.getCurrencyBalance({
    code: 'eosio.token',
    account: 'zzb',
    symbol: 'EOS'
}).then(console.log);


eosInstance.getCurrencyBalance({
    code: 'eosio.token',
    account: 'zzb',
}).then(console.log);
