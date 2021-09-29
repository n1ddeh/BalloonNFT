import { task, types } from "hardhat/config";
import { Contract } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { env } from "@/lib/env";
import { getContract } from "@/lib/contract";
import { getWallet } from "@/lib/wallet";

task("deploy-contract", "Deploy NFT contract").setAction(async (_, hre) => {
  const url_prefix = `https://gateway.pinata.cloud/ipfs/QmQCvf5PKe6CJbGxrTJ92Z9xbDjNLMcNJ5BGLA5UZhnYAu`;
  let contracts = [];
  for (let i = 0; i < 10; ++i) {
    let result = hre.ethers
      .getContractFactory("BalloonNFT", getWallet())
      .then((contractFactory) => contractFactory.deploy(`${url_prefix}/balloon_${i}.jpg`))
      .then((result) => {
        process.stdout.write(`Contract address: ${result.address}`);
      });
    contracts.push(result);
  }
  return contracts;
});

task("mint-nft", "Mint an NFT")
  .addParam("tokenUri", "Your ERC721 Token URI", undefined, types.string)
  .setAction(async (tokenUri, hre) => {
    return getContract("BalloonNFT", hre)
      .then((contract: Contract) => {
        return contract.mintNFT(env("ETH_PUBLIC_KEY"), tokenUri, {
          gasLimit: 500_000,
        });
      })
      .then((tr: TransactionResponse) => {
        process.stdout.write(`TX hash: ${tr.hash}`);
      });
  });