const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

router.get('/ip', (req, res) => {
  res.json({ip: req.ip });
})

exports.routes = router;