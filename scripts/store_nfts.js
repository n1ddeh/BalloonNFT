const  { NFTStorage } = require('nft.storage');
require('dotenv').config({ path: '../.env' });
const { packToFs } = require('ipfs-car/pack/fs');
const { CarIndexedReader } = require('@ipld/car');
const fs = require("fs");

// Get the default endpoint for hosting the NFT tokens
const endpoint = 'https://api.nft.storage'

// Get the directory where the images are stored
const DIR = "../assets/img/balloons";

async function main() {
    // Ensure the directory exists
    try {
        if (!fs.existsSync(DIR)) {
            console.log("Directory does not exist.")
            return
        }
    }
    catch(err) {
        console.log("An error occurred")
    }
    
    // Get the NFT.Storage API Key from the .env
    const apiKey = process.env.NFT_STORAGE_API_KEY;

    // Init. the NFTStorage
    const storage = new NFTStorage({endpoint: endpoint, token: apiKey})

    console.log("Packing files to car")
    const { root } = await packToFs({
        input: `${DIR}`,
        output: `${process.cwd()}/output.car`,
    })

    const expectedCid = root.toString()
    console.log({expectedCid})

    const carReader = await CarIndexedReader.fromFile(
        `${process.cwd()}/output.car`
    )

    console.log(`Sending car to NFT.Storage at the endpoint: ${endpoint}`)

    const cid = await storage.storeCar(carReader)
    console.log(`File CID: ${cid}`)
    
    // verify the service stored the CID we expected
    const cidsMatch = expectedCid === cid
    console.log({ cid, expectedCid, cidsMatch })

    // check that the CID is pinned
    const status = await storage.status(cid)
    console.log(status)

    // Delete car file created
    await fs.promises.rm(`${process.cwd()}/output.car`)
}

main()
