require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

//const PRIVATE_KEY = process.env.NODE_ENV === 'production' ? PRODUCTION_SIGNER_PRIVATE_KEY : DEVELOPMENT_SIGNER_PRIVATE_KEY;
const PRIVATE_KEY = process.env.DEVELOPMENT_SIGNER_PRIVATE_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{ //supported networks
    sepolia: {
      url: 'https://sepolia.infura.io/v3/3a39184585eb4e82819554d558e85c37',
      accounts: [
        PRIVATE_KEY
      ]
    }
  }
};
