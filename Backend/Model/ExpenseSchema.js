const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenseSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    Date: { type: Date, default: Date.now },
    customerName: String,
    amount: Number,
  },
  {
    timestamps: true,
  }
);

exports.expense = mongoose.model("expense", expenseSchema);
