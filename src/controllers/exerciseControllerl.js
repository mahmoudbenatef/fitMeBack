const ExerciseModel = require("../models/exerciseModel");
const statusCode = require("../helper/statusCode");
const helper = require("../helper/controllersHelper");

const getAllExercise = async (req, res, next) => {
  // reture the paginate result
  return res.status(statusCode.Success).json(req.paginatedResult);
};

const createExercise = async (req, res, next) => {
  const data = req.body;
  // check if the body is empty
  if (helper.isEmptyObject(data)) {
    return helper.handelEmptyData(res);
  }

  // should validate the data before create it
  const newExercise = new ExerciseModel({ ...data });
  newExercise.validate((err) => {
    if (err)
      return res
        .status(statusCode.BadRequest)
        .json({ message: "not valide", error: err });
    newExercise.save();
    return res.status(statusCode.Created).json(newExercise);
  });
};
const updateExercise = async (req, res, nex) => {
  const { exerciseId } = req.params;
  const data = req.body;
  // check if the body is empty or not
  if (helper.isEmptyObject(data) || !exerciseId) {
    return helper.handelEmptyData(res);
  }
  try {
    const updated = await ExerciseModel.findOneAndUpdate(
      { _id: exerciseId },
      { ...data },
      { new: true }
    );
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
