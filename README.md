# Simple Contract Depoly & Verify Project

This project can be use to deploy contract and also auto verify contract address in respective blockchain network.

## Installation

1. Clone the repository

```
$ git clone https://github.com/Samir-Yudiz/contract-deploy-verify.git
$ cd contract-deploy-verify
```

2. Create `.env` file.

3. Add Credential in `.env` file as mentioned in `.env.example`

4. Install node modules

```
$ npm i
```

## Script

1. Deploy Contract on localhost

Add another terminal and start local node

```
$ npx hardhat node
```

In first terminal

```
$ npm run compile
$ npm run deploy
```

2. Deploy Contract on Polygon Network

```
$ npm run compile
$ npm run deployMatic
```

You can also create your own custom script for different networks, refer to `package.json` file.

# contract-deploy-verify
