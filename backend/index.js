const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  console.log(req.body);
  const user = req.body.user;
  if (user == "user") {
    res.status(200).json({ msg: "success" });
  }
});
app.listen(3000);
