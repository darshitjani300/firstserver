require("dotenv").config();

const express = require("express");

const app = express();

const obj = {
  name: "xyz",
  email: "xyz@gmail.com",
};

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

app.get("/authentication", (req, res) => {
  res.json(obj);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
