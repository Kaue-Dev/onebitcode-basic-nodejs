import fs from 'fs'

fs.existsSync('file.txt') && console.log('Arquivo existe!');

fs.writeFileSync('file.txt', 'Olá, mundo!')

const content = fs.readFileSync('file.txt', 'utf-8')
console.log(content)

fs.renameSync('file.txt', 'renamed-file.txt')

fs.unlinkSync('renamed-file.txt')