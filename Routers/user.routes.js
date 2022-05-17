const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("I am get request from login route");
});
router.get("/register", (req, res) => {
  res.send("I am get request from register route");
});
// app.get("/", (req, res) => {
//   res.send("This was delete request");
// });
module.exports = router;