'use strict'

const  eosInstance = require('./eos-instance');

eosInstance.rpc.get_info({}).then(console.log);


