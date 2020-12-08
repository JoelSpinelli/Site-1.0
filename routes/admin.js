const path = require('path');
const express = require('express');
const publicIp = require('public-ip');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

router.get('/ip', async (req, res) => {
  res.json({ip: await publicIp.v6()});
})

exports.routes = router;