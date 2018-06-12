'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transaction(tr => {
    return tr.delegatebw({
        from: 'pluswavemagi',
        receiver: 'pluswavemagi',
        stake_net_quantity: '100.0000 EOS',
        stake_cpu_quantity: '100.0000 EOS',
        transfer: 0
    })
}).then(console.log)
    .catch(e => {
        console.error(e);
    })