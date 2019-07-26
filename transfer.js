'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transact({
    actions: [{
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
            actor: 'yoafkunfjhoo',
            permission: 'active',
        }],
        data: {
            from: 'yoafkunfjhoo',
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
