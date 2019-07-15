const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the node-express-mail-api');
});

module.exports = router;
