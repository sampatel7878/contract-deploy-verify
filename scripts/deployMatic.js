const fs = require('fs');
const hre = require('hardhat');
const { spawn } = require('child_process');

async function main() {
    try {
        const MyToken = await hre.ethers.getContractFactory('TestNft');
        const myToken = await MyToken.deploy();
        await myToken.deployed();

        console.log('Deployed Contract Address : ', myToken.address);
        const scriptPath = 'scripts/verify.sh';
        const contractAddress = myToken.address;

        let childProcess;
        console.log(
            'Contract verification is under process, it will take few seconds...'
        );
        setTimeout(() => {
            // Execute the shell script
            childProcess = spawn('sh', [scriptPath, contractAddress, 'matic'], {
                stdio: ['pipe', 'inherit', 'inherit'],
            });

            childProcess.stdin.end();

            // Handle process completion
            childProcess.on('close', (code) => {
                console.log(`Script exited with code ${code}`);
                deleteFolder('artifacts');
                deleteFolder('cache');
            });
        }, 10000);
    } catch (error) {
        deleteFolder('artifacts');
        deleteFolder('cache');
        console.log('Something went wrong!');
        console.log(error);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

function deleteFolder(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file) => {
            const curPath = `${path}/${file}`;

            if (fs.lstatSync(curPath).isDirectory()) {
                // Recursively delete subdirectories
                deleteFolder(curPath);
            } else {
                // Delete files within the folder
                fs.unlinkSync(curPath);
            }
        });

        // Delete the empty directory
        fs.rmdirSync(path);
    } else {
        console.log(`Folder not found: ${path}`);
    }
}
