// src/server.js
// require('dotenv').config()

const app = require('./app');

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});