require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "sepolia",

  networks: {
    sepolia: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  },
};
