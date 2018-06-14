'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transaction(tr => {
    return tr.undelegatebw({
        from: 'pluswavemagi',
        receiver: 'pluswavemagi',
        unstake_net_quantity: '3.0000 EOS',
        unstake_cpu_quantity: '3.0000 EOS'
    })
}).then(console.log)
    .catch(e => {
        console.error(e);
    })
