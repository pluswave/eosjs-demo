'use strict'


// jungleTestnet.getBlock();

const  eosInstance = require('./eos-instance');

eosInstance.getBlock(1).then(result => { console.log(result) })

eosInstance.getInfo({}).then(console.log);

eosInstance.getCurrencyBalance({
    code: 'eosio.token',
    account: 'zzb',
    // symbol: 'EOS'
}).then(console.log);
