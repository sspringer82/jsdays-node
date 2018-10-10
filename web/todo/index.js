const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('Todos'));

module.export = router;
