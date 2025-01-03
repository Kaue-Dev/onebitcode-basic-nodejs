const os = require('os');

function getMemoryUsagePercent() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  return ((usedMemory / totalMemory) * 100).toFixed(2);
}

module.exports = getMemoryUsagePercent;