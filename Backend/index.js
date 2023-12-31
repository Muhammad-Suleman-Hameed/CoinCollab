const express = require("express");
const server = express();
const cors = require("cors");
const userRouter = require("./Routes/UserRouters");
const expenseRouter = require("./Routes/ExpenseRouters");
const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()


main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    process.env.MONGO_URI,  { useNewUrlParser: true }  );
  console.log("Database Connected");
}
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database Connection has been established successfully");
});

server.get('/', (req, res) => {
    console.log("hello world")
    res.send("working")
})

server.use(cors());
server.use(express.json());
server.use("/user", userRouter.router);
server.use("/record", expenseRouter.router );

const port = 5000;

server.listen(port, () => {
  console.log(`${port} is listening `);
});
