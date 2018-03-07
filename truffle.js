// Allows us to use ES6 in our migrations and tests.
require('babel-register');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    ganache: {
      host: 'ganache',
      port: 8545,
      network_id: '*', // Match any network id
    },
    geth: {
      host: 'geth',
      port: 8545,
      network_id: '*', // Match any network id
    },
    rinkeby_node: {
      host: 'rinkeby',
      port: 8545,
      network_id: 4, // Match Rinkeby network
      gas: 4704588,
      gasPrice: 65000000000,
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(process.env.RINKBY_MNEMONICS, "https://ropsten.infura.io/" + process.env.RINKBY_INFURA_API);
      },
      network_id: 4, // Match Rinkeby network
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(process.env.MAINNET_MNEMONICS, "https://mainnet.infura.io/" + process.env.MAINNET_INFURA_API);
      },
      network_id: 1, // Match Main network
    },
  },
};
