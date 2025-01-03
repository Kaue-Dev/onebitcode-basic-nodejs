const path = require('path');
const fs = require('fs');

const showSystemInfo = require('./showSystemInfo');

function saveSystemInfo() {
  const logDir = path.join(__dirname, 'logs');
  const filePath = path.join(logDir, 'log.txt');

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  const log = showSystemInfo();
  
  fs.appendFileSync(filePath, log);
}

module.exports = saveSystemInfo;