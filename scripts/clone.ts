require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
// import * as dotenv from "dotenv";

// import IMultiSig from "../typechain-types/Imultisig.sol"

async function main() {
  let provider = {
    PrivateKey: process.env.PRIVATE_KEY as BytesLike,
    URL: process.env.URL,
  };
  const provider2 = ethers.getDefaultProvider("ropsten", provider.URL);
  let wallet = new ethers.Wallet(provider.PrivateKey, provider2);
  const _value = ethers.utils.parseEther("1");

  const CONTRACTADDRESS = "0x6e828b59fc799b6ef92e42d2f39e438a7477f469";
  const MULTISIG = await ethers.getContractAt("IMultiSig", CONTRACTADDRESS);
  //   await wallet.sendTransaction({ to: CONTRACTADDRESS, value: _value });
  //   console.log();
  //   console.log("contractBalanc", await MULTISIG.contractBalance());

  const res = await MULTISIG.contractBalance();
  console.log("Balance: ", res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x6e828b59fc799b6ef92e42d2f39e438a7477f469
