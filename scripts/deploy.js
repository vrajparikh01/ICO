const hre = require("hardhat");

async function main() {
  const DappToken = await hre.ethers.getContractFactory("DappToken");
  const dappToken = await DappToken.deploy();
  await dappToken.deployed();
  console.log("DappToken deployed to:", dappToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
