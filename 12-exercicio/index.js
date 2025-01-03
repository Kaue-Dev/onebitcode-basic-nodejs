const showSystemInfo = require('./showSystemInfo');
const saveSystemInfo = require('./saveSystemInfo');

setInterval(showSystemInfo, 1000);
setInterval(saveSystemInfo, 1000);