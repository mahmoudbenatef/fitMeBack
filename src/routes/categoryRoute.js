const express = require("express");
const CategoryModel = require("../models/categoryModel");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const category = await CategoryModel.create(req.body);
    return res.json(category);
  } catch (error) {
    return res.send(error);
  }
});
router.get("/", async (req, res) => {
  try {
    const category = await CategoryModel.find({});
    return res.json(category);
  } catch (error) {
    return res.send(error);
  }
});
module.exports = router;
