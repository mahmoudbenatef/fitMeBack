const MealModel = require("../models/mealModel");
async function getBreakfast(req, res) {
    try {
        const meals = await MealModel.find({ mealType: "breakfast" })
        res.status(200).json(meals);
    }
    catch (e) {
        res.status(500).json(err);
    }
}
async function getlaunch(req, res) {
    try {
        const meals = await MealModel.find({ mealType: "launch" })
        res.status(200).json(meals);
    }
    catch (e) {
        res.status(500).json(err);
    }
}
async function getDinner(req, res) {
    try {
        const meals = await MealModel.find({ mealType: "dinner" })
        res.status(200).json(meals);
    }
    catch (e) {
        res.status(500).json(err);
    }
}
module.exports = {
    getBreakfast,
    getDinner,
    getlaunch
}
