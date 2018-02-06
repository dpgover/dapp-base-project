import $ from 'jquery';
import Web3 from 'web3';
import Contract from 'truffle-contract';

import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/fontawesome-all.min.css';
import '../stylesheets/app.css';

let web3;

window.addEventListener('load', () => {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof window.web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    console.log('Metamask injected web3');
    web3 = new Web3(window.web3.currentProvider);
  } else {
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }
});
