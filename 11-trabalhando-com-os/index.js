const os = require('os');

const platform = os.platform();
console.log(platform);

const arch = os.arch();
console.log(arch);

const cpus = os.cpus();
console.log(cpus[0].model);

const totalMemory = os.totalmem();
console.log(totalMemory / 1024 / 1024 / 1024);

const freeMemory = os.freemem();
console.log(freeMemory / 1024 / 1024 / 1024);