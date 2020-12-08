const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('https://twitter.com/joelspinelli')
  // res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

router.get('/ip', (req, res) => {
  res.json({ipv6: (req.headers['x-forwarded-for'] || '').split(',').pop().trim(),
          ipv4:  ( req.socket.remoteFamily )});
})

exports.routes = router;