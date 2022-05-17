// const app = require('./app');
const express = require("express");
const app = express();
 require("dotenv").config();
const PORT = process.env.PORT || 3001;
console.log(PORT);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));
// app.get("/", (req, res) => {
//   // const {id,name} = req.query;
//   // const {id,name} = req.params;
//   const name = req.header("name");
//   res.send(`student name = ${name}`);
// });
// app.post('/user',(req,res)=>{
//   const name = req.body.name;
//   res.send(`name is : ${name}`);
// })
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});
app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`your name is : ${fullName} and age is : ${age}`)
});
app.listen(PORT);
