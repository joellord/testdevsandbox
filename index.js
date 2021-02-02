const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  res.send({msg: "Hello !"}).status(200);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});