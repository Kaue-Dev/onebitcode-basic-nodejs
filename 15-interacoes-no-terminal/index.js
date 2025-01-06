//process.stdout.write('Digite o seu nome: ')

//process.stdin.on('data', data => {
  //process.stdout.write(`Seu nome é ${data}`)
//})

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Digite o seu nome: ', nome => {
  rl.write(`Seu nome é ${nome}\n`)
  rl.close()
})

rl.once('close', () => {
  rl.write('Saindo...\n')
  process.exit(0)
})
