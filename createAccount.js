'use strict';

const eosInstance = require('./eos-instance');

const creator = 'yoafkunfjhoo';
const accountName = 'amagicwallet';
const owner_pubkey = 'EOS8WWEv86zWADVyF66ibiwUW6zEN6D9Ao87rXj1LRwuZPKH35NSR'
const active_pubkey = 'EOS7yRrYEGvQ7cx7jUMwRSjR8YX5aqcgbHiYdcHJcXTHLWfWSh6NY'

eosInstance.transact({
    actions: [{
        account: 'eosio',
        name: 'newaccount',
        authorization: [{
            actor: creator,
            permission: 'active',
        }],
        data: {
            creator: creator,
            name: accountName,
            owner: {
                "threshold": 1,
                "keys": [{
                    "key": owner_pubkey,
                    "weight": 1
                }],
                accounts: [],
                waits:[]
            },
            active: {
                "threshold": 1,
                "keys": [{
                    "key": active_pubkey,
                    "weight": 1
                }],
                accounts: [],
                waits:[]
            }
        }
    }, {
        account: 'eosio',
        name: 'buyrambytes',
        authorization: [{
            actor: creator,
            permission: 'active',
        }],
        data: {
            payer: creator,
            receiver: accountName,
            bytes: 8192
        }
    }, {
        account: 'eosio',
        name: 'delegatebw',
        authorization: [{
            actor: creator,
            permission: 'active',
        }],
        data: {
            from: creator,
            receiver: accountName,
            stake_net_quantity: '10.0000 TNT',
            stake_cpu_quantity: '10.0000 TNT',
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
