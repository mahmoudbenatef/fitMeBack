const express = require("express"),
  Router = express.Router();

const {
  createExercise,
  deleteExercise,
  getAllExercise,
  updateExercise,
} = require("../controllers/exerciseControllerl");

Router.route("/").get(getAllExercise).post(createExercise);
Router.route("/:id").delete(deleteExercise).patch(updateExercise);

module.exports = Router;
