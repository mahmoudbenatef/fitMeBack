const express = require("express");
const CategoryModel = require("../models/categoryModel");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const meal = await  CategoryModel.create(req.body);
    return res.json(meal);
  } catch (error) {
    return res.send("fuck");
  }
});

module.exports = router;
