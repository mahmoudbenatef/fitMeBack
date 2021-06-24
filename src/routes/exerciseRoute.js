const express = require("express"),
  Router = express.Router(),
  paginate = require("../middlewares/paginateModel"),
  ExerciseModel = require("../models/exerciseModel");

const {
  createExercise,
  deleteExercise,
  getAllExercise,
  updateExercise,
} = require("../controllers/exerciseControllerl");

Router.route("/")
  .get(paginate(ExerciseModel), getAllExercise)
  .post(createExercise);
Router.route("/:exerciseId").delete(deleteExercise).patch(updateExercise);

module.exports = Router;
