const { execSync } = require('child_process');

function checkNodeVersion() {
    const version = process.versions.node;
    console.log(`Node.js version: ${version}`);
    if (parseInt(version.split('.')[0]) < 14) {
        console.error('Node.js version must be 14 or higher.');
    }
}

function checkInstalledPackages() {
    const packages = ['express', 'mongoose']; // Add your required packages here
    packages.forEach(pkg => {
        try {
            require.resolve(pkg);
            console.log(`${pkg} is installed.`);
        } catch (e) {
            console.error(`${pkg} is not installed.`);
        }
    });
}

checkNodeVersion();
checkInstalledPackages();