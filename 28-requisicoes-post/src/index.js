const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/register', (req, res) => {
  const { name, email } = req.body;
  res.send(`Nome: ${name} | Email: ${email}`);
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
