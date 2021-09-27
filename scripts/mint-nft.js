require('dotenv').config();

// Environment Variables
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/BalloonNFT.sol/BalloonNFT.json");
const contractAddress = CONTRACT_ADDRESS;
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI) {
    // Get latest nonce (# of times we've sent a transaction)
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); 
  
    // Init. the transaction
    const tx = {
      'from': PUBLIC_KEY,                           //  The origin of our transaction is our public address
      'to': contractAddress,                        //  The contract we wish to interact with and send the transaction
      'nonce': nonce,                               //  The account nonce with the number of transactions sent from our address
      'gas': 500000,                                //  The estimated gas needed to complete the transaction
      'maxPriorityFeePerGas': 1999999987,           // The estimated fee to bid per gas.
      'data': nftContract.methods                   // The computation we wish to perform in this transaction— which in this case is minting an NFT
        .mintNFT(PUBLIC_KEY, tokenURI).encodeABI()  
    };

    // Sign the transaction
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);

    signPromise.then((signedTx) => {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
            err ? console.log("Something went wrong when submitting your transaction:", err)
                : console.log("The hash of your transaction is: ", hash, "\nCheck Alchemy's Mempool to view the status of your transaction!");
        })
    }).catch((err) => {
        console.log("Promise failed:", err);
    });

}

mintNFT("https://gateway.pinata.cloud/ipfs/QmZcrmWUvNf7zxib1fUZCvMFSd4GN9sjJD3oo8qbAmou4d")