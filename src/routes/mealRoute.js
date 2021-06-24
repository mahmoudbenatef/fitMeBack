const express = require("express");
const MealModel = require("../models/mealModel");
const router = express.Router();
const { getBreakfast, getDinner, getlaunch } = require('../controllers/mealController');
console.log("inside Meal");
router.get("/breakfast", getBreakfast);
router.get("/launch", getlaunch);
router.get("/dinner", getDinner);

router.post("/", async (req, res) => {
  try {
    const meal = await MealModel.create({ ...req.body });
    return res.json(meal);
  } catch (error) {
    return res.send("err1");
  }
});
router.get("/", async (req, res) => {
  try {
    const meals = await MealModel.find({})
      .populate({
        path: "notAllowedTo",
        populate: { path: "category", select: ["name"] },
      })
      .exec();
    return res.json(meals);
  } catch (error) {
    return res.send("err2");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const meal = await MealModel.findById(req.params.id)
      .populate({
        path: "notAllowedTo",
        populate: { path: "category", select: ["name"] },
      })
      .exec();
    return res.json(meal);
  } catch (error) {
    return res.send("err2");
  }
});
router.patch("/:id", async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const newMeal = await MealModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();
    return res.json(newMeal);
  } catch (error) {
    res.send("err3");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const meals = await MealModel.findByIdAndDelete(req.params.id).exec();
    res.json(meals);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
