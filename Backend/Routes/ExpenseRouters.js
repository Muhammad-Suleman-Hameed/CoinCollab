const express = require("express")
const router = express.Router()
const expenseController = require('../Controller/ExpenseController')


router.
    post('/addCustomer', expenseController.addExpense )
    .get('/getCustomer', expenseController.getExpense )
    .get('/getAllCustomer', expenseController.getAllExpense )

exports.router = router