const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./routes/user.routes");

const dotenv = require('dotenv')
dotenv.config()

const MongoConnect = process.env.mongodb_url

const app = express();

app.use(express.json());
app.use("/api/user", UserRouter);

app.get("/", async (req, res) => {
  res.send({ Hellow: "Worrrld" });
});

app.get("/");
app.listen(3000);

mongoose
  .connect(
    MongoConnect
  )
  .then(() => console.log("successfully connected to mongodb"))
  .catch((error) => console.log("connection error", error));
