'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transact({
    actions: [{
        account: 'eosio',
        name: 'undelegatebw',
        authorization: [{
            actor: 'yoafkunfjhoo',
            permission: 'active',
        }],
        data: {
            from: 'yoafkunfjhoo',
            receiver: 'yoafkunfjhoo',
            unstake_net_quantity: '10.0000 TNT',
            unstake_cpu_quantity: '10.0000 TNT'
        }
    }]
}, {
        blocksBehind: 3,
        expireSeconds: 30,
}).then(console.log)
    .catch(e => {
        console.error(e);
    })
