require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: '0.8.18',
    networks: {
        matic: {
            url: process.env.MATIC_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: {
            bscTestnet: process.env.BSC_APIKEY,
            goerli: process.env.GOERLI_APIKEY,
            avalancheFujiTestnet: process.env.AVAX_APIKEY,
            polygonMumbai: process.env.MATIC_APIKEY,
        },
    },
    networks: {
        goerli: {
            url: process.env.GOERLI_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
        avax: {
            url: process.env.GOERLI_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
        bsc: {
            url: process.env.GOERLI_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
        matic: {
            url: process.env.MATIC_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
};
