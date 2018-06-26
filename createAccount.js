'use strict';

const eosInstance = require('./eos-instance');

const creator = 'pluswavemagi';
const accountName = 'amagicwallet';
const owner_key = 'EOS5kdTT2HrgU8RmfSUqdXjbzfaiSF4xEeDFrwtA1XTEGbv8Hv6y3'
const active_key = 'EOS5kdTT2HrgU8RmfSUqdXjbzfaiSF4xEeDFrwtA1XTEGbv8Hv6y3'

eosInstance.transaction(tr => {
    tr.newaccount({
        creator: creator,
        name: accountName,
        owner: {
            "threshold": 1,
            "keys": [{
                "key": owner_pubkey,
                "weight": 1
              }]
        },
        active: {             
            "threshold": 1,
            "keys": [{
            "key": active_pubkey,
            "weight": 1
          }]
        }
    })
   tr.buyrambytes({
    payer: creator,
    receiver: accountName,
    bytes: 8192
   })

  tr.delegatebw({
    from: creator,
    receiver: accountName,
    stake_net_quantity: '0.1000 EOS',
    stake_cpu_quantity: '0.1000 EOS',
    transfer: 0
  })
}).then(console.log)
    .catch(e => {
        console.error(e);
    })
