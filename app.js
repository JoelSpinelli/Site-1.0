const path = require('path');
const express = require('express');

const port = process.env.PORT_APP || 3001;

const app = express();

app.set('views', 'views');

const adminData = require('./routes/admin');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', adminData.routes)

app.use((req, res, next) => {
  res.redirect('/');
});

app.listen(port);