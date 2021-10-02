const  { NFTStorage } = require('nft.storage');
require('dotenv').config({ path: '../.env' });
const { create, urlSource } = require('ipfs-http-client');

// Get the default endpoint for hosting the NFT tokens
const endpoint = 'https://api.nft.storage'

const URI = 'https://bafybeihu2dd5awcrhxddzfvpujdsr42oezse2u62trboaglk3344gyrjym.ipfs.dweb.link'

async function main() {
    // Get the NFT.Storage API Key from the .env
    const apiKey = process.env.NFT_STORAGE_API_KEY;

    const ipfs = create()

    const file = await ipfs.get(urlSource(URI))

    console.log(file)
}

main()
