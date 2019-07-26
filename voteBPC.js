'use strict';

const eosInstance = require('./eos-instance');


eosInstance.transact({
    actions: [{
        account: 'eosio',
        name: 'voteproducer',
        authorization: [{
            actor: 'yoafkunfjhoo',
            permission: 'active',
        }],
        data: {
            voter: 'yoafkunfjhoo',
            proxy: '',
            producers: ['cronoseos123', 'lioninjungle' ],
        }
    }]
}, {
        blocksBehind: 3,
        expireSeconds: 30,
    }).then(console.log)
    .catch(e => {
        console.error(e);
    })