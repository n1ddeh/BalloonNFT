require('dotenv').config({ path: '../.env' });
const { createReadStream, open, close, writeFile, appendFile, writeSync } = require('fs')
const { readdir } = require('fs/promises');
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

// Get the directory where the images are stored
const DIR = "../assets/img/balloons";

async function uploadMetadata(cid, name, description) {
    const body = {
        name: name,
        description: description,
        image: `ipfs://${cid}`
    };
    const options = {
        pinataMetadata: {
            name: `metadata_${name}`
        }
    }
    try {
        const resp = await pinata.pinJSONToIPFS(body, options)
        console.log(resp)

        open(`${process.cwd()}/balloon_metadata.json`, "a", (err, fd) => {
            if (err) {
                console.log('Could not write to file')
                console.log(err)
                return
            }
            writeSync(fd, JSON.stringify(resp, null, '\t'))
        })

        close(`${process.cwd()}/balloon_metadata.json`)
    }
    catch(error) {
        console.log(error)
        console.log(`metadata error for ${name} ${cid}`)
    }
}

async function main() {
    // Check if Pinata is authenticated
    const { authenticated } = await pinata.testAuthentication()

    // If Pinata is NOT authenticated, print an error and return
    if (!authenticated) {
        console.log('Pinata not authenticated. Make sure your API keys are set.');
        return;
    }
    else console.log("Pinata authenticated!");

    // Ensure the directory exists
    try {
        if (!existsSync(DIR)) {
            console.log("Directory does not exist.")
            return
        }
    }
    catch(err) {
        console.log("An error occurred")
    }

    // Get the file names
    const fileNames = await readdir(DIR)

    // For each file in the directory, upload to pinata
    fileNames.forEach(async (fileName) => {
        const readableStreamForFile = createReadStream(DIR + `/${fileName}`);

        const options = {
            pinataMetadata: {
                name: fileName,
                keyvalues: {
                    object: "Balloon"
                }
            }
        }

        try {
            const resp = await pinata.pinFileToIPFS(readableStreamForFile, options)
        
            const cid = resp.IpfsHash

            uploadMetadata(cid, fileName, `Just another balloon`)

            open(`${process.cwd()}/balloon_images.json`, "a", (err, fd) => {
                if (err) {
                    console.log('Could not write to file')
                    console.log(err)
                    return
                }
                writeSync(fd, JSON.stringify(resp, null, '\t'))
            })

            close(`${process.cwd()}/balloon_images.json`)
        }
        catch(error) {
            console.log(error)
            console.log(`The file ${fileName} probably has an error`)
        }
    })
}

main()
