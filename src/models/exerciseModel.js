const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  avgCaloriesMale: {
    type: String,
    required: true,
  },
  avgCaloriesFemale: {
    type: String,
    required: true,
  },
  activityType: {
    type: String,
    required: true,
  },
  notAllowedTo: [String],
});

const ExerciseModel = mongoose.model("Exercise", exerciseSchema);
module.exports = ExerciseModel;
