const path = require('path');
const express = require('express');

const port = process.env.PORT_APP || 3000;

const app = express();

app.set('views', 'views');
// app.set('trust proxy', '8.8.8.8');

const adminData = require('./routes/admin');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', adminData.routes)

app.use((req, res, next) => {
  res.redirect('/');
});

console.log(`listening port ${port}`);
app.listen(port);