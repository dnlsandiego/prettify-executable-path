#!/usr/bin/env node

const childProcess = require('child_process');
const prettyjson = require('prettyjson');

const path = childProcess.execSync('echo $PATH').toString().trim().split(':');

console.log(prettyjson.render(path));
