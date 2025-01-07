# Event Loop

> É um conceito fundamental que permite que o Javascript seja executado de forma não bloqueante e eficiente

### Eventos e Callbacks

- Eventos são a base do Event Loop
- Callbacks são funções que executam quando um determinado evento ocorrer

### Funcionamentos Básicos

- Gerenciar a execução de tarefas assíncronas
- Permitir a execução de várias operações sem bloquear a thread principal
- Opera em um loop infinito verificando e executando tarefas na fila de eventos

# Módulos

- Para trabalhar com ES Modules é preciso configurar o arquivo package.json

```json
"type": "module"
```

- Exemplo de importação e exportação de funções usando ES Modules

```js
// sum.js
export function sum(a, b) {
  return a + b;
}
```

```js
// index.js
import { sum } from './sum.js'
console.log(sum(2, 2))
```

# Manipulação de Arquivos

```js
import fs from 'fs'

// Verificando se o arquivo exsite
fs.existsSync('file.txt') && console.log('Arquivo existe!');

// Escrevendo em um arquivo
fs.writeFileSync('file.txt', 'Olá, mundo!')

// Lendo o conteúdo de um arquivo
const content = fs.readFileSync('file.txt', 'utf-8')
console.log(content)

// Renomeando um arquivo
fs.renameSync('file.txt', 'renamed-file.txt')

// Deleta um arquivo
fs.unlinkSync('renamed-file.txt')
```

> **Observação:** Métodos sync não permitem que o restante do código seja executado enquanto a execução do próprio método não for concluída

# Lidando com caminhos usando o módulo “path”

```js
const path = require('path');

// __dirname exibe o caminho completo até o diretório atual
const fullPath = path.join(__dirname)

const relativePath = "./arquivos/arquivo.txt";
const fullPath2 = path.resolve(__dirname, relativePath);

// Exibe o nome do arquivo que se encontra no final do caminho
const fileName = path.basename(fullPath2);

// Verifica qual a extensão de um determinado arquivo
const fileExtension = path.extname(fullPath2);
```

# Trabalhando com Informações do SO

```js
const os = require('os');

// Exibe qual o sistema operacional
const platform = os.platform();

// Exibe a arquitetura do sistema operacional
const arch = os.arch();

// Exibe os processadores do PC
const cpus = os.cpus();

// Exibe a memóriam RAM total do PC
const totalMemory = os.totalmem();

// Exibe a memória RAM disponível no PC
const freeMemory = os.freemem();
```

