const path = require('path');
const express = require('express');

const port = process.env.PORT_APP || 3001;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <link rel="stylesheet" href="/css/style.css">
    <h1>Joel Spinelli</h1>
    <p>Welcome to my site</p>
  `);
});

app.listen(port);