#!/usr/bin/env node

const childProcess = require('child_process');
const prettyjson = require('prettyjson');

function getPath() {
    const path = childProcess.execSync('echo $PATH').toString().trim();

    if (!path) {
        throw new Error('Unable to access `$PATH`');
    }

    return path.split(':');
}

function outputPrettyPath() {
    const prettyPath = prettyjson.render({ PATH: getPath() });
    console.log(prettyPath);
}

if (require.main === module) {
    outputPrettyPath();
}

// export funcs so functionality can be `require`d by other modules.
module.exports = {
    getPath: getPath,
    outputPrettyPath: outputPrettyPath
};
