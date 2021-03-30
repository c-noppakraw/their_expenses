const express = require('express');
const router = express.Router();
const controllers = require('./expenses.controllers');
const middlewares = require('./expenses.middlewares');

router.get('/', controllers.list_expenses);
router.post('/add', middlewares.validator, controllers.insert_expenses);
router.put('/update/:id', middlewares.validator, controllers.update_expenses);

module.exports = router;