let vm;

/**
* @param {number} m
* @param {number} n
* @returns {number}
*/
module.exports.euclid_algorithm = function(m, n) {
    return vm.RunInt('euclid_algorithm', m, n);
};

const path = require('path').join(__dirname, 'ssvm_nodejs_starter_lib_bg.wasm');
const ssvm = require('ssvm');
vm = new ssvm.VM(path, { args:process.argv, env:process.env, preopens:{'/': __dirname} });

