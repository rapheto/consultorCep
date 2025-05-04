const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/teste', (req, res) => {
  res.json('Olá do backend!');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});