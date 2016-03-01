# ethereum-console

Commandline console for Ethereum nodes.

`ethconsole` connects to an Ethereum node running in the background (tested with eth and geth) via IPC
and provides an interactive javascript console containing the `web3` object with admin additions.

Note that the admin additions are not yet official and may change any time.

## Installation / Usage

    # npm install -g ethereum-console
    npm http GET https://registry.npmjs.org/ethereum-console
    npm http 304 https://registry.npmjs.org/ethereum-console
    npm http GET https://registry.npmjs.org/web3
    ...
    # ethconsole
    Connecting to node at /home/user/.ethereum/geth.ipc
    Connection successful.
    Current block number: 1083107
    Entering interactive mode.
    > web3.admin.getNodeInfo(function(err, info) { console.log(info.name); } )
    eth/v1.2.0-2192c209/Debug-Linux/clang/int
