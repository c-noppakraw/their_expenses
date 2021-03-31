const express = require('express');
const router = express.Router();
const controllers = require('./expenses.controllers');
const middlewares = require('./expenses.middlewares');
const model = require('./expenses.model');

router.get('/', controllers.list_expenses);
router.post('/add', middlewares.validator, controllers.insert_expenses);
router.get('/update/:id', controllers.detail_expenses);
router.put('/update/:id', middlewares.validator, controllers.update_expenses);
router.delete('/delete/:id', controllers.delete_expenses);

module.exports = router;