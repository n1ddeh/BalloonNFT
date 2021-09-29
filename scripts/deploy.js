async function main() {
    // Grab the contract factory 
    const MyNFT = await ethers.getContractFactory("BalloonNFT");
 
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy("https://gateway.pinata.cloud/ipfs/QmQCvf5PKe6CJbGxrTJ92Z9xbDjNLMcNJ5BGLA5UZhnYAu/balloon_0.jpg"); // Instance of the contract 
    console.log("Contract deployed to address:", myNFT.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });