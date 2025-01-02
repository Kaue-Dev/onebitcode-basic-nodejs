import { createFile, updateFile, readFile, deleteFile } from './functions.js'

createFile('Hello, World!\n')
readFile()
updateFile('Hello, World again!')
readFile()
deleteFile()