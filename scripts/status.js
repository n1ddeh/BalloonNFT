const  { NFTStorage } = require('nft.storage');
require('dotenv').config({ path: '../.env' });

// Get the default endpoint for hosting the NFT tokens
const endpoint = 'https://api.nft.storage'

// Get the NFT.Storage API Key from the .env
const apiKey = process.env.NFT_STORAGE_API_KEY;

async function main() {
    // Init. the NFT.Storage object
    const storage = new NFTStorage({endpoint: endpoint, token: apiKey})
    
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readLine.question("Enter the CID:", async (cid) => {
        // Returns current status of the stored NFT by its CID.
        const status = await storage.status(cid)
        console.log('Status:')
        console.log(status)

        readLine.close()
    })
}

main()
