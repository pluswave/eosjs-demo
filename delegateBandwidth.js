'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transact({
    actions: [{
        account: 'eosio',
        name: 'delegatebw',
        authorization: [{
            actor: 'yoafkunfjhoo',
            permission: 'active',
        }],
        data: {
            from: 'yoafkunfjhoo',
            receiver: 'yoafkunfjhoo',
            stake_net_quantity: '100.0000 TNT',
            stake_cpu_quantity: '100.0000 TNT',
            transfer: false
        }
    }]
}, {
        blocksBehind: 3,
        expireSeconds: 30,
    }).then(console.log)
    .catch(e => {
        console.error(e);
    })

