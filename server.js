const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const mongoose = require('mongoose');

const PORT = 3001
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });