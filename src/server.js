require('dotenv').config()
const app = require('./app');

const PORT = process.env.MYSQL_PORT;

app.listen(PORT, () => console.log(`app rodando na porta ${PORT}`));