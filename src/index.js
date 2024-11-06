const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => res.send('Aplicação Nodejs em CI!'));

app.listen(porta, '0.0.0.0', () => console.log(`App em http://localhost:${porta}`));
