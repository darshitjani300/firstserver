require("dotenv").config();
const express = require("express");

const app = express();
console.log(process.env.PORT);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Welcome to home");
});

app.get("/home/twitter", (req, res) => {
  res.send(
    `
    <div>
    <label>Name :</label>
    <input type="text" placeholder="Type the input" />
    </div>
    `
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
