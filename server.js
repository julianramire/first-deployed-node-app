const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello, World');
});

app.listen(PORT, () => {console.log('App is running at https://localhost:3001')})