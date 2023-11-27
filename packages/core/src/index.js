#!/usr/bin/env node
//const utils = require("@brick-cli-dev/utils");
//console.log('hello block-cli');
//console.log(utils());
const importLocal = require('import-local');
if(importLocal(__filename)){
    require('npmlog').info('cli', 'using local version of brick-cli-dev');
}
else{
    require('../lib/core.js')(process.argv.slice(2));
}
