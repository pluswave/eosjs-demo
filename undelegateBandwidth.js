'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transact({
    actions: [{
        account: 'eosio',
        name: 'undelegatebw',
        authorization: [{
            actor: 'pluswavemagi',
            permission: 'active',
        }],
        data: {
            from: 'pluswavemagi',
            receiver: 'pluswavemagi',
            unstake_net_quantity: '10.0000 EOS',
            unstake_cpu_quantity: '10.0000 EOS'
        }
    }]
}, {
        blocksBehind: 3,
        expireSeconds: 30,
}).then(console.log)
    .catch(e => {
        console.error(e);
    })
