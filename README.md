# DAPP Base App

# Running the containers
- `docker-compose up -d app ganache`
- `docker-compose up -d app geth`
- `docker-compose up -d app rinkeby`

**ONLY START 1 of the node containers at the same time**

## APP container
- `yarn run dev` to start the frontend server
- `truffle test --network [ganache|geth]` to run the contracts tests
- `truffle migrate --network [ganache|geth]` to migrate the contracts
- `truffle console --network [ganache|geth]` for an interactive console with the node

### Truffle Console
Here are some commands to use with the contract

#### Get the contract instance
- `ContractName.deployed().then((instance) => {app = instance;});`

#### Listen for Sale and Buy events
- `app.itemPutForSale({}, {fromBlock: 0, toBlock: 'latest'}).watch((error, event) => {console.log(error); console.log(event)});`
- `app.itemBought({}, {fromBlock: 0, toBlock: 'latest'}).watch((error, event) => {console.log(error); console.log(event)});`

#### Get an Item by its ID
- `app.items(1)`

#### Put an Item for Sale
- `app.sellItem('Item 1', 'Description 1', web3.toWei(5, 'ether'), {from: web3.eth.accounts[0]});`

#### Buy an Item
- `app.buyItem(1, {from: web3.eth.accounts[1], value: web3.toWei(5, 'ether')});`

## GANACHE container 
- The node starts automatically when the container is up
- It will create 3 accounts with 100ETH each.  

## GETH container:
- The node starts automatically when the container is up
- The first time the node runs, it will generate the DAG data structure
  
  *Check for "Generating DAG in progress" in the logs (`docker logs -f <container_name>`) and wait until it reaches 100% before using the node*

- 3 accounts will be created by default, with password `pass1234`
- `geth attach http://localhost:8545` to get a console

## RINKEBY container:
- The node starts automatically when the container is up
- The first time the node runs, it will synchronize with the network. It will take a while.
  
  *Check the logs (`docker logs -f <container_name>`) and wait until it finishes*

- 3 accounts will be created by default, with password `M3rc4d0Ch41n88`
- `geth attach http://localhost:8545` to get a console
- In the geth console, you can execute `eth.syncing` to view the progress of the syncing process
