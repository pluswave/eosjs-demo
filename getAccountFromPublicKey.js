'use strict';
const  eosInstance = require('./eos-instance');


eosInstance.getKeyAccounts({
    public_key: 'EOS5FBuqwwyu4xDSTRFs2RyZBUFfQASpwG4kthGQUWbMHtbkZ6hqW'
}).then( console.log );
