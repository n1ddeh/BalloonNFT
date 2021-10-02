require('dotenv').config('../.env');
const { API_URL, PUBLIC_KEY, PRIVATE_KEY } = process.env;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/BalloonNFT.sol/BalloonNFT.json");

const contractAddress="0x3BFeee37955e816ffA9A1Cfa6D8A759056f2B794"

const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function getPrice() {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');
  
    // Create the raw transaction
    const tx = {
      'from': PUBLIC_KEY,
      'to': contractAddress,
      'nonce': nonce,
      'gas': 500000,
      'maxPriorityFeePerGas': 1999999987,
      'data': nftContract.methods.price(1).encodeABI()
    };

    try {
      const result = await nftContract.methods.price(1).call(tx)
      console.log(`Price: ${result}`)
    }
    catch(err) {
      console.log(err)
    }
}

getPrice()