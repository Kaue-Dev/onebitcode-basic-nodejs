const path = require('path');

const fullPath = path.join(__dirname)
console.log(fullPath);

const relativePath = "./arquivos/arquivo.txt";

const fullPath2 = path.resolve(__dirname, relativePath);
console.log(fullPath2);

const fileName = path.basename(fullPath2);
console.log(fileName);

const fileExtension = path.extname(fullPath2);
console.log(fileExtension);