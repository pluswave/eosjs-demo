'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transact({
    actions: [{
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
            actor: 'pluswavemagi',
            permission: 'active',
        }],
        data: {
            from: 'pluswavemagi',
            to: 'amagicwallet',
            quantity: '0.0001 EOS',
            memo: 'hello world'
        }
    }]
}, {
        blocksBehind: 3,
        expireSeconds: 30,
    }).then(console.log)
    .catch(e => {
        console.error(e);
    })
