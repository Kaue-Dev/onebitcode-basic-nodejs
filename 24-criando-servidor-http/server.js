const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req)

  res.writeHead(200)
  res.write('NodeJS Server')
  res.end()
})

const PORT = 3000

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
