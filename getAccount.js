'use strict'

const  eosInstance = require('./eos-instance');

eosInstance.getAccount({account_name:'testaccount1'}).then(console.log);


