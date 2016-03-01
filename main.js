#!/usr/bin/env node
var Web3 = require('web3');
var web3admin = require('./web3Admin.js');
var repl = require('repl');
var net = require('net');
var ipcpath = require('./getIpcPath.js');

process.on('uncaughtException', function(err) {
    console.error("Uncaught exception: " + err);
});

console.log("Connecting to node at " + ipcpath());
web3 = new Web3(new Web3.providers.IpcProvider(ipcpath(), net));
web3admin.extend(web3);
web3.eth.getBlockNumber(function(err, number) {
    if (err) {
        console.error("Could not connect to node. Please start an Ethereum node first.");
    } else {
        console.log("Connection successful.");
        console.log("Current block number: " + number); 
        console.log("Entering interactive mode.");
        var replServer = repl.start({});
    }
});
