const fs = require('fs')
const path = require('path')
const readline = require('readline')

const notesDir = path.join(__dirname, 'notes')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function initNotesDir() {
  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir)
  }
}

function listNotes() {
  const notes = fs.readdirSync(notesDir)
  if (notes.length === 0) {
    console.log('Nenhuma nota encontrada')
  } else {
    console.log('Notas:')
    notes.forEach((note, index) => {
      console.log(`${index + 1}. ${note}`)
    })
  }
}

function readNote() {
  listNotes()

  rl.question('Qual nota você deseja ler? ', (index) => {
    const notes = fs.readdirSync(notesDir)
    const selectedNote = notes[index - 1]
    
    if (!selectedNote) {
      console.log('Nota não encontrada')
    } else {
      const notePath = path.join(notesDir, selectedNote)
      const noteContent = fs.readFileSync(notePath, 'utf-8')
      console.log(noteContent)
    }

    askForNextAction()
  })
}

function createNote() {
  rl.question('Digite o nome da nota:', (noteName) => {
    const notePath = path.join(notesDir, noteName)
    
    rl.question('Digite o conteúdo da nota:', (noteContent) => {
      fs.writeFileSync(notePath + ".txt", noteContent)
      console.log('Nota criada com sucesso!')

      askForNextAction()
    })
  })
}

function askForNextAction() {
  rl.question('Deseja realizar outra ação? (s/n)', (answer) => {
    if (answer.toLowerCase() === 's') {
      main()
    } else {
      console.log('Até mais!')
      rl.close()
    }
  })
}

function deleteNote() {
  listNotes()

  rl.question('Qual nota você deseja excluir? ', (index) => {
    const notes = fs.readdirSync(notesDir)
    const selectedNote = notes[index - 1]
    
    if (!selectedNote) {
      console.log('Nota não encontrada')
    } else {
      const notePath = path.join(notesDir, selectedNote)
      fs.unlinkSync(notePath)
      console.log('Nota excluída com sucesso!')
    }

    askForNextAction()
  })
}

function main() {
  initNotesDir()

  console.clear()
  console.log('#############################')
  console.log('Bem-vindo ao bloco de notas!')
  console.log('#############################\n')

  console.log('Escolha uma opção:');
  console.log('1. Listar notas')
  console.log('2. Ler nota')
  console.log('3. Criar nota')
  console.log('4. Excluir nota');
  console.log('5. Sair\n');

  rl.question('Escolha uma opção: ', (option) => {
    switch (option) {
      case '1':
        listNotes()
        askForNextAction()
        break
      case '2':
        readNote()
        break
      case '3':
        createNote()
        break
      case '4':
        deleteNote()
        break
      case '5':
        console.log('Até mais!');
        rl.close()
        break
      default:
        console.log('Opção inválida')
    }
  })
}

main()