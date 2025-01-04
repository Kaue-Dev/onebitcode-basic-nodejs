const fs = require('fs');

const readStream = fs.createReadStream('file.txt');
const buffer = [];

readStream.on('data', (chunk) => {
  buffer.push(chunk);
  console.log(chunk);
});

readStream.on('end', () => {
  const completeData = Buffer.concat(buffer);
  console.log(completeData.toString());
});