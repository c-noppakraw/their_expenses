const express = require('express');
const router = express.Router();
const controllers = require('./expenses.controllers');
const middlewares = require('./expenses.middlewares');
const model = require('./expenses.model');

router.get('/', controllers.list_expenses); // GET /expenses
router.post('/', middlewares.validator, controllers.insert_expenses); // POST /expenses
router.get('/:id', controllers.detail_expenses); // GET /expenses/:id
router.put('/:id', middlewares.validator, controllers.update_expenses); // PUT /expenses/:id
router.delete('/:id', controllers.delete_expenses); // DELETE /expenses/:id

module.exports = router;