require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privatekey = fs.readFileSync(".env").toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    }, 
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privatekey]
      }
    }, 
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [privatekey]
},
  solidity: "0.8.4"
}
