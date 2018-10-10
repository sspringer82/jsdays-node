const express = require('express');
const todoController = require('./controller');

const router = express.Router();

router.get('/', todoController);

module.exports = router;
