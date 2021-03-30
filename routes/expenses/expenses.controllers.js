const express = require('express');
const { validationResult } = require('express-validator');
const {Success,Error} = require('../../response');

const list_expenses = async (req, res, next) => {
    try {
        new Success(res, 'success', 'expenses page');
    } catch (error) {
        console.log(error);
        new Error(res, 'not_found', error);
    }
};

const insert_expenses = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) new Error(res, 'cant_insert', errors.array());
        new Success(res, 'created', { 
            description: req.body.description,
            amount: req.body.amount,
            month: req.body.month,
            year: req.body.year,
        });
    } catch (error) {
        console.log(error);
        new Error(res, 'cant_insert', error);
    }
}

const update_expenses = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) new Error(res, 'cant_update', errors.array());
        const id = req.params.id;
        new Success(res, 'update', { 
            id: id,
            description: req.body.description,
            amount: req.body.amount,
            month: req.body.month,
            year: req.body.year,
        });
    } catch (error) {
        console.log(error);
        new Error(res, 'cant_update', error);
    }
}

module.exports = { list_expenses, insert_expenses, update_expenses }; 