import fs from 'fs'

export function createFile(content) {
  fs.writeFileSync('file.txt', content)
}

export function updateFile(content) {
  fs.appendFileSync('file.txt', content)
}

export function readFile() {
  const content = fs.readFileSync('file.txt', 'utf8')
  console.log(content);
}

export function deleteFile() {
  fs.unlinkSync('file.txt')
}