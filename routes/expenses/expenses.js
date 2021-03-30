const express = require('express');
const router = express.Router();
const controllers = require('./expenses.controllers');
const middlewares = require('./expenses.middlewares');

router.get('/', controllers.list_expenses);
router.post('/add', middlewares.validator_insert, controllers.insert_expenses);

module.exports = router;