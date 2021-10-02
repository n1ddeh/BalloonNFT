require('dotenv').config('../.env');
const { API_URL, PUBLIC_KEY, PRIVATE_KEY } = process.env;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/BalloonNFT.sol/BalloonNFT.json");

const contractAddress="0x3BFeee37955e816ffA9A1Cfa6D8A759056f2B794"

const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT() {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');
  
    //the transaction
    const tx = {
      'from': PUBLIC_KEY,
      'to': contractAddress,
      'nonce': nonce,
      'gas': 700000,
      'maxPriorityFeePerGas': 2999999987,
      'data': nftContract.methods.mint("0x2422E6015715fC4E41C927761e50493Ec9c6Cd50", 1).encodeABI()
    };

    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signPromise.then((signedTx) => {
  
      web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
        if (!err) {
          console.log("The hash of your transaction is: ", hash, "\nCheck Alchemy's Mempool to view the status of your transaction!"); 
        } else {
          console.log("Something went wrong when submitting your transaction:", err)
        }
      });
    }).catch((err) => {
      console.log("Promise failed:", err);
    });
}

mintNFT()