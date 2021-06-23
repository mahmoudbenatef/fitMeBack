"use strict";
const PlanModel = require("../models/planModel");
const createOne = async (req, res) => {
  try {
    const doc = await new PlanModel({ ...req.body }).save();
    res.status(201).json({ data: { ...req.body } });
  } catch (err) {
    res.status(500).json(err);
  }
};
const getOne = async (req, res) => {
  const id = req.params.id;
  const day = req.params.date;
  try {
    const currentUserPlan = await PlanModel.findOne(
      { user: id, day },
      { _id: 0 }
    )
      .populate("breakfast", { name: 1, recipe: 1 })
      .populate("dinner", { name: 1, recipe: 1 })
      .populate("launch", { name: 1, recipe: 1 });
    res.json(currentUserPlan);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateOne = async (req, res) => {
  const id = req.params.id;
  const day=req.params.date;
  try {
    const currentUpdate = await PlanModel.findOneAndUpdate({user:id,day}, req.body, {
      new: true,
    }).exec();
    res.json(currentUpdate);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createOne,
  getOne,
  updateOne,
};
