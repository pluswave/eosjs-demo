'use strict'

const  eosInstance = require('./eos-instance');

eosInstance.rpc.get_block(1).then(console.log)

