const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
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
}
  , {
    writeConcern: {
      j: true,
      wtimeout: 1000,
    }
  }
);

const ExerciseModel = mongoose.model("Exercise", exerciseSchema);
module.exports = ExerciseModel;
