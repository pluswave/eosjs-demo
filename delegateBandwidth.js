'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transact({
    actions: [{
        account: 'eosio',
        name: 'delegatebw',
        authorization: [{
            actor: 'pluswavemagi',
            permission: 'active',
        }],
        data: {
            from: 'pluswavemagi',
            receiver: 'pluswavemagi',
            stake_net_quantity: '100.0000 EOS',
            stake_cpu_quantity: '100.0000 EOS',
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

