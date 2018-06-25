'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transaction(tr => {
    tr.newaccount({
        creator: 'pluswavemagi',
        name: 'amagicwallet',
        owner: {
            "threshold": 1,
            "keys": [{
                "key": "EOS5kdTT2HrgU8RmfSUqdXjbzfaiSF4xEeDFrwtA1XTEGbv8Hv6y3",
                "weight": 1
              }]
        },
        active: {             
            "threshold": 1,
            "keys": [{
            "key": "EOS5kdTT2HrgU8RmfSUqdXjbzfaiSF4xEeDFrwtA1XTEGbv8Hv6y3",
            "weight": 1
          }]
        }
    })
   tr.buyrambytes({
    payer: 'pluswavemagi',
    receiver: 'amagicwallet',
    bytes: 8192
   })

  tr.delegatebw({
    from: 'pluswavemagi',
    receiver: 'amagicwallet',
    stake_net_quantity: '10.0000 EOS',
    stake_cpu_quantity: '10.0000 EOS',
    transfer: 0
  })
}).then(console.log)
    .catch(e => {
        console.error(e);
    })
