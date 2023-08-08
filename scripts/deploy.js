const hre = require("hardhat");

async function main() {
  const goerliFaucet = await hre.ethers.deployContract("GoerliFaucet");

  await goerliFaucet.waitForDeployment();

  console.log(`GoerliFaucet deployed to ${goerliFaucet.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
