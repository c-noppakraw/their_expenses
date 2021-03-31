const mongoose = require('mongoose');
const mongo = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/ExpensesDB';

mongoose.connect(dbUrl, {
    useNewUrlParser: true
});

const db = mongoose.connection;
const Schema = mongoose.Schema;

const expensesSchema = new Schema({
    id:{
        type: Schema.Types.ObjectId
    },
    description:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    month:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
});

const expenses = module.exports = mongoose.model('expenses', expensesSchema);
module.exports.createExpense = (newExpenses, callback) => {
    newExpenses.save(callback)
};
module.exports.getAllExpenses = (data) => {
    expenses.find(data)
};
module.exports.getOneExpenses = (id, callback) => {
    const query = {
        _id: id
    }
    expenses.findOne(query, callback)
}
module.exports.updateExpense = (data, callback) => {
    const query = {
        _id: data.id
    }
    expenses.findByIdAndUpdate(query, {
        $set: {
            description: data.description,
            amount: data.amount,
            month: data.month,
            year: data.year
        }
    },{ new: true }, callback);
};
module.exports.deletdExpense = (id, callback) => {
    expenses.findByIdAndDelete(id, callback)
};