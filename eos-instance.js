const Eos = require('eosjs');
const fetch = require('node-fetch');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');

const account = require('./myaccount');
const {TextEncoder,TextDecoder} = require('util') 

const defaultPrivateKey = account.privateKey.active;// bob
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);

const rpc = new Eos.JsonRpc(
    'https://api.testnet.eos.io',
    {
        fetch
    })

var testNet = new Eos.Api({
    rpc: rpc,
    signatureProvider,
    textDecoder: new TextDecoder,
    textEncoder: new TextEncoder 
});

module.exports = testNet;
