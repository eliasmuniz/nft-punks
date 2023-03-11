const { ethers } = require("hardhat");

require('dotenv').config();

// deploy es una función asincrona
const deploy = async () => { 
  // getSigners() trae la información que traemos desde nuestra llave privada
  // deployer es un objeto que nos permite desplegar contratos a la red que tengamos configurada
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);
  // We get the contract to deploy
  const NftPunks = await ethers.getContractFactory("NftPunks");
  // Instancia del contracto desplegado
  const deployed = await NftPunks.deploy();
  console.log("NFTs Punks is deployed at:", deployed.address);
};


// Llamando la función deploy()
deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });