const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const http = require('http');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('https://twitter.com/joelspinelli')
  // res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

router.get('/ip', (req, res) => {
  res.json(
    {ip: (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || ( req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress ),
      ipExpress: req.ip,
      'x-real-ip': req.headers['x-real-ip'],
      'x-client-ip': req.headers['x-client-ip'],
      'cf-connecting-ip': req.headers['cf-connecting-ip'],
      'fastly-client-ip': req.headers['fastly-client-ip'],
      'true-client-ip': req.headers['true-client-ip'],
      'x-cluster-client-ip': req.headers['x-cluster-client-ip'],
      'x-forwarded': req.headers['x-forwarded'],
      'forwarded-for': req.headers['forwarded-for'],
      'x-real-i': req.headers['x-real-ip']
    });
})




exports.routes = router;