// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat');
const { spawn } = require('child_process');

async function main() {
    const MyToken = await hre.ethers.getContractFactory('UsaidToken');
    const myToken = await MyToken.deploy();
    await myToken.deployed();

    console.log('Deployed Contract Address : ', myToken.address);
    const scriptPath = 'scripts/verify.sh';
    const contractAddress = myToken.address;
    // console.log({ contractAddress });
    if (contractAddress) console.log('Contract Deployed : ', contractAddress);

    // Execute the shell script
    const childProcess = spawn(
        'sh',
        [scriptPath, contractAddress, 'localhost'],
        {
            stdio: ['pipe', 'inherit', 'inherit'],
        }
    );

    // Send initial input to the shell script
    // childProcess.stdin.write(initialInput);
    childProcess.stdin.end();

    // Handle process completion
    childProcess.on('close', (code) => {
        console.log(`Script exited with code ${code}`);
    });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
