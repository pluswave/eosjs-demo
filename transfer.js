'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transfer({
    from: 'imagicwallet',
    to: 'amagicwallet',
    quantity: '5 EOS',
    memo: 'hello world'
}).then(console.log)
    .catch(e => {
        console.error(e);
    })
