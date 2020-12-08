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
            req.connection.socket.remoteAddress),
    'x-forwarded-for': (req.headers['x-forwarded-for'] || '').split(',').pop().trim(),
    'forwareded': req.headers['forwarded'],
    'connection-remoteAddress': req.connection.remoteAddress || '',
    'socket-remoteAddress': req.socket.remoteAddress || '',
    'connection-socket-remoteAddress': (req.connection.socket || '').remoteAddress
    });
})




exports.routes = router;