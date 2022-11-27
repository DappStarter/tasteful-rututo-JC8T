require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remind exchange inner produce bridge gasp'; 
let testAccounts = [
"0x3b1ddf1c10485733fdadefcc34a73b284462d8464fdb652ddff998dca177e932",
"0x805df76fea423496903117f954fe46a2cd7a565c57d05bfeaa382464bcdd3970",
"0xcd82821e960e2274fbc4c9472e894576791e9385b55e45a969bde4c3f2629590",
"0x77a4299509f3d7c8b333718758a1acf794614fba1d53b25d3cecddef083a5780",
"0x10edae312c55ec3e073677ee79783a8621c32bb5703baca778f57fb0c9917eeb",
"0xab5e23db77db9a527c866eb5ea239d30698b2e28c3d9e811d67e50dfaabdcda2",
"0xd30c9bfe40c8e5f793c9c13d0def63ee1fec2c3bfde5c5d37361f19946e796bd",
"0x9e68921a64459896dec60d3dbc2f06fca3f6ef4ec6116b864f860fa34da10131",
"0xd319dc60276d1538d101f6fecdd76ca32860d14dfbb0bacb931f264e0033eded",
"0x3857497909833497ffaa6a8001ceba5a93f03c654b987ec04722910478c2e754"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

