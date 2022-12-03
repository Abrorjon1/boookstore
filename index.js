const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// mongodb+srv://offism:<password>@cluster0.iwyiykd.mongodb.net/?retryWrites=true&w=majority
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://offism:sma01022002@cluster0.iwyiykd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/auth", require("./src/router/auth"));

app.listen(5000, () => {
  console.log(`Server is running on 5000`);
});
