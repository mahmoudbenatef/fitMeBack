const ExerciseModel = require("../models/exerciseModel");
const statusCode = require("../helper/statusCode");
const helper = require("../helper/controllersHelper");

const getAllExercise = async (req, res, nex) => {
  const allExercise = await ExerciseModel.find();
  return res.status(statusCode.Success).json(allExercise);
};

const createExercise = async (req, res, nex) => {
  const data = req.body;
  // check if the body is empty
  if (helper.isEmptyObject(data)) {
    helper.handelEmptyData(res);
  }

  // should validate the data before create it
  const newExercise = new ExerciseModel({ ...data });
  try {
    newExercise.save();
    return res.status(statusCode.Created).json(newExercise);
  } catch (error) {
    next(error);
  }
};
const updateExercise = async (req, res, nex) => {
  const { exerciseId } = req.params;
  const data = req.body;
  // check if the body is empty or not
  if (helper.isEmptyObject(data) || !exerciseId) {
    helper.handelEmptyData(res);
  }
  try {
    const updated = await ExerciseModel.findOneAndUpdate(
      { _id: exerciseId },
      data
    ).getUpdate();
    return res.status(statusCode.Success).json(updated);
  } catch (error) {
    next(error);
  }
};

const deleteExercise = async (req, res, nex) => {
  const { exerciseId } = req.params;
  // check if no id passed
  if (!exerciseId) {
    helper.handelEmptyData(res);
  }
  const deleted = await ExerciseModel.findOneAndDelete({ _id: exerciseId });
  return res.status(statusCode.Success).end();
};
module.exports = {
  getAllExercise,
  createExercise,
  updateExercise,
  deleteExercise,
};
