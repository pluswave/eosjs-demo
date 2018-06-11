'use strict';

const eosInstance = require('./eos-instance');

eosInstance.transaction(tr => {
    return tr.voteproducer({
        voter: 'pluswavemagi',
        proxy: '',
        producers: ['cronoseos123', 'lioninjungle' ],
    })
}).then(console.log)
    .catch(e => {
        console.error(e);
    })
