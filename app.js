const express = require("express");
const app = express();
const userRouter = require("./Routers/user.routes");
app.use("/api/user", userRouter);
// app.get("/", (req, res) => {
//   res.send("I am get request from home route");
// });
app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});
app.use("/login", (req, res) => {
  res.cookie("name","rabeya");
  res.cookie("age",30);
  res.clearCookie("name");
  res.append("id","1299")
  res.send("Hi i am login page");
});
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});
app.use((req, res) => {
  res.send("<h1>404! Not a valid url.</h1>");
});
module.exports = app;
