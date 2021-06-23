const mongoose = require("mongoose");

const MealScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
  mealType: {
    type: String,
    enum: ["breakfast", "brunch", "lunch", "dinner"],
  },
  notAllowedTo: [
    {
      category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
});

const MealModel = mongoose.model("Meal", MealScheme);
module.exports = MealModel;
