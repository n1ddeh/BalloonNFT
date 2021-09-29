require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("./tasks/nft");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "ropsten",
  networks: {
     hardhat: {},
     ropsten: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     }
  },
}