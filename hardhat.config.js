require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

//const PRIVATE_KEY = process.env.NODE_ENV === 'production' ? PRODUCTION_SIGNER_PRIVATE_KEY : DEVELOPMENT_SIGNER_PRIVATE_KEY;
const ETHERSCAN = process.env.ETHERSCAN;
const PRIVATE_KEY = process.env.DEVELOPMENT_SIGNER_PRIVATE_KEY;
const PROJECT_ID = process.env.PROJECT_ID;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{ //supported networks
    sepolia: {
      url: `https://sepolia.infura.io/v3/${PROJECT_ID}`,
      accounts: [
        PRIVATE_KEY
      ]
    }
  },
  etherscan:{
    apiKey: ETHERSCAN,
  }
};
