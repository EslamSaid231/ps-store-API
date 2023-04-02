const express = require("express");
const { readData } = require("../data/util");
const router = express.Router();

router.get("/cart", async (req, res, next) => {
  const data = await readData();
  res.send(data);
});

router.put("/cart", async (req, res, next) => {
  const cart = await req.body;
  const data = await readData();
  res.send(data);
  console.log(cart);
});

module.exports = router;
