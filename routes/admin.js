const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const http = require('http');
const requestIp = require('request-ip');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('https://twitter.com/joelspinelli')
  // res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

router.get('/ip', (req, res) => {
  res.json({ip: (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || ( req.connection.remoteAddress ||
         req.socket.remoteAddress ||
         req.connection.socket.remoteAddress ),
        iplib: requestIp.getClientIp(req),
        ipreal: req.headers['x-real-ip']
      });
})


exports.routes = router;