const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send("NodeJS and Express");
})

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
