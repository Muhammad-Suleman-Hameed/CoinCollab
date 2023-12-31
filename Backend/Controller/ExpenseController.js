const expenseModel = require("../Model/ExpenseSchema");
const EXPENSE = expenseModel.expense;

exports.addExpense = async (req, res) => {
  try {
    const { /*userId,*/ customerName, amount } = req.body;

    if (/*!userId ||*/ !customerName || !amount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const expense = await EXPENSE.create({
      //userId: userId,
      customerName: customerName,
      amount: amount,
    });
    return res.status(201).json({ customer: expense });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const expense = await EXPENSE.findOne({ _id: id });
    return res.status(201).json({ customer: expense });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getAllExpense = async (req, res) => {
  try {
    const expense = await EXPENSE.find();
    return res.status(201).json({ customer: expense });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
