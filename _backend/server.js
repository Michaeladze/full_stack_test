const express = require('express');
const bodyParser = require('body-parser');

const { login } = require('./api/auth');

const { connectToDb } = require('./database/connection');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

/** Подключаемся к БД */
connectToDb();

app.post('/login', (req, res) => {
  login(req, res);
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
