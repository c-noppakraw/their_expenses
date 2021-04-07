const express = require('express');
const { validationResult } = require('express-validator');
const { Success, Error } = require('../../response');
const Expenses = require('./expenses.model');

const list_expenses = async (req, res, next) => {
    try {
        Expenses.getAllExpenses( (err, data) => {
            if(err) new Error(res, 'not_found', err);
            new Success(res, 'success', data);
        });
    } catch (error) {
        new Error(res, 'not_found', error);
    }
};

const insert_expenses = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) new Error(res, 'cant_insert', errors.array());
        data = new Expenses({
            description: req.body.description,
            amount: req.body.amount,
            month: req.body.month,
            year: req.body.year,
        });
        Expenses.createExpense(data, function(err){
            if(err) new Error(res, 'cant_insert', err);
            new Success(res, 'created', data);
        });
    } catch (error) {
        new Error(res, 'cant_insert', error);
    }
}

const detail_expenses = async (req, res, next) => {
    try {
        const id = req.params.id;
        Expenses.getOneExpenses(id, (err, data) => {
            if(err) new Error(res, 'not_found', err);
            new Success(res, 'success', data);
        });
    } catch (error) {
        new Error(res, 'not_found', error);
    }
}

const update_expenses = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) new Error(res, 'cant_update', errors.array());
        const id = req.params.id;
        data = new Expenses({
            id: id,
            description: req.body.description,
            amount: req.body.amount,
            month: req.body.month,
            year: req.body.year,
        });
        Expenses.updateExpense(data, (err) => {
            if(err) new Error(res, 'cant_update', error);
            new Success(res, 'update', data);
        });
    } catch (error) {
        new Error(res, 'cant_update', error);
    }
}

const delete_expenses = async (req, res, next) => {
    try {
        const id = req.params.id;
        Expenses.deletdExpense(id, (err) => {
            if(err) new Error(res, 'cant_delete', error);
            new Success(res, 'success');
        });
    } catch (error) {
        new Error(res, 'cant_delete', error);
    }
}

module.exports = { list_expenses, insert_expenses, detail_expenses, update_expenses, delete_expenses };