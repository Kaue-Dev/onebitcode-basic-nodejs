const os = require('os');

const getMemoryUsagePercent = require('./getMemoryUsagePercent');

function showSystemInfo() {
  const platform = os.platform();
  const arch = os.arch();
  const cpuModel = os.cpus()[0].model;
  const activityTime = os.uptime();
  const memoryUsagePercent = getMemoryUsagePercent();
  
  const log = `Platform: ${platform}\nArch: ${arch}\nCPU Model: ${cpuModel}\nActivity Time: ${activityTime}\nMemory Usage: ${memoryUsagePercent}%\n\n`;
  console.log(log);
  return log;
}

module.exports = showSystemInfo;