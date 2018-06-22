'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transaction(tr => {
    return tr.newaccount({
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
}).then(console.log)
    .catch(e => {
        console.error(e);
    })
