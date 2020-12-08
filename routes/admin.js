const path = require('path');
const express = require('express');
const ip = require('../util/ip');


const rootDir = require('../util/path');
const http = require('http');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('https://twitter.com/joelspinelli')
  // res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

// const ip_info = get_ip(req, )

router.get('/ip', (req, res) => {
  res.json( {
    ip: ip(req, right_most_proxy=True)
    // ip: (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || ( req.connection.remoteAddress ||
    //         req.socket.remoteAddress ||
    //         req.connection.socket.remoteAddress),
    // 'x-forwarded-for': (req.headers['x-forwarded-for'] || '').split(',').pop().trim(),
    // 'connection-remoteAddress': req.connection.remoteAddress || '',
    // 'socket-remoteAddress': req.socket.remoteAddress || '',
    // 'connection-socket-remoteAddress': (req.connection.socket || '').remoteAddress
    });
})




exports.routes = router;