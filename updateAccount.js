'use strict';

const eosInstance = require('./eos-instance');

const myAccount = require('./myaccount');
const creator = myAccount.accountName;
const owner_pubkey = 'EOS8WWEv86zWADVyF66ibiwUW6zEN6D9Ao87rXj1LRwuZPKH35NSR'
const active_pubkey = 'EOS7yRrYEGvQ7cx7jUMwRSjR8YX5aqcgbHiYdcHJcXTHLWfWSh6NY'

eosInstance.transact({
    actions: [{
        account: 'eosio',
        name: 'updateauth',
        authorization: [{
            actor: creator,
            permission: 'active',
        }],
        data: {
            account: creator,
            permission: 'active',
            parent: 'owner',
            auth: {
                "threshold": 1,
                "keys": [{
                    "key": myAccount.publicKey.active,
                    "weight": 1
                },{
                    "key": active_pubkey,
                    "weight": 1
                }],
                accounts: [],
                waits:[]
            }
        }
    }]
}, {
    blocksBehind: 3,
    expireSeconds: 30,
}).then(console.log)
    .catch(e => {
        console.error(e);
    })
