const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send(`Hello, ${process.env.NAME}`);
});

app.listen(PORT, () => {console.log('App is running')})