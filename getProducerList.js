'use strict';

const eosInstance = require('./eos-instance');

eosInstance.rpc.get_table_rows({
    json: true,
    code: 'eosio',
    scope: 'eosio',
    table: 'producers',
    table_key: '',
    limit: 200
}).then( console.log)
    .catch( console.error);
