require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy raise sadness combine grace slight fresh giggle'; 
let testAccounts = [
"0xab3c1d6a10ba537cc8625d32e301a54989690355ea6e943ce1d87e0829088ba8",
"0x8333bca9f976a30949df7de5f60f42443ea101bd54ef39c56e562c9d13fd458d",
"0x512f030ebc62f768b2d8ccea7993074ee035186f7fc1374f98f1c780378172cc",
"0x848c75d5d5210bcbef7a5cc1cb181fdd1e51424312bfcf27558436548198bf7b",
"0x127cd9ec31f003745f3f92792bcfa1cd3324764c762be1221528a206bb868674",
"0x27e82331915f0d5cfc5889dae8e1fd1b28c456dc66d89f845d15d1d6f9228b4b",
"0x0b724c028ca33349cb6ee978cb3e7b876619b38c248e7e590d13b78ab5629e2c",
"0x0d1c9e78b2d1d27edc4a919c8506a80639aa22e9c870d4a9de3cbe01d251d1fa",
"0x87fba540563429c0b180c44da993a1cf1306fa72c0eb58bce51d46cba50b7f02",
"0xf4c2bd399fd285df205812fab9ef304ee002a4c7f9818c023fa614f9e2fa6b7d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
