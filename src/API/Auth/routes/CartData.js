const express = require("express");
const { readData } = require("../data/util");
const { get } = require("./auth");
const router = express.Router();

router.get("/cart", async (req, res, next) => {
  const user = await get();
  const data = await readData();
  res.send(data);
  next();
});

router.put("/cart", async (req, res, next) => {
  const cart = await req.body;
  const data = await readData();
  res.send(data);
  console.log(cart);
});

module.exports = router;
