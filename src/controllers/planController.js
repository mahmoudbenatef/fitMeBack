"use strict";
const CampModel = require("../models/campModel");
const CategoryModel = require("../models/categoryModel");
const PlanModel = require("../models/planModel");
const createOne = async (req, res) => {
  try {
    const doc = await new PlanModel({ ...req.body }).save();
    res.status(201).json({ data: req.body.date });
  } catch (err) {
    res.status(500).json(err);
  }
};
async function createForExceptional(req, res) {
  try {
    const plan = await new PlanModel({ ...req.body }).save();
    res.status(201).json(plan);
  } catch (err) {
    res.status(500).json(err);
  }
}
const createForRegular = async (req, res) => {
  try {
    const exceptionalCat = await CategoryModel.findOne({
      label: "exceptional",
    });
    const regularUsersInCamp = await CampModel.findById(req.body.camp)
      .populate("users")
      .lean()
      .exec();
    regularUsersInCamp["users"].forEach(async function (user) {
      if (user.categoryID !== exceptionalCat)
        await new PlanModel({
          ...req.body,
          user: user._id,
          type: "regular",
        }).save();
    });

    res.status(201).json({ data: regularUsersInCamp });
  } catch (err) {
    res.status(500).json(err);
  }
};
const getRegular = async (req, res) => {
  try {
    const plan = await PlanModel.findOne({
      camp: req.params.camp,
      date: req.params.date,
      type: "regular",
    })
      .lean()
      .exec();
    res.status(201).json(plan);
  } catch (err) {
    res.status(500).json(err);
  }
};
async function getExceptional(req, res) {
  try {
    const plan = await PlanModel.findOne({
      camp: req.params.camp,
      date: req.params.date,
      user: req.params.user,
    })
      .lean()
      .exec();
    res.status(201).json(plan);
  } catch (err) {
    res.status(500).json(err);
  }
}
async function updateRegular(req, res) {
  try {
    const plan = await PlanModel.update(
      { camp: req.params.camp, date: req.params.date, type: "regular" },
      { $set: { ...req.body } },
      { multi: true }
    );
    res.status(201).json(plan);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateExceptional(req, res) {
  console.log("baaaaaaaaaaaaaaakr");
  try {
    const plan = await PlanModel.updateMany(
      { camp: req.params.camp, date: req.params.date, user: req.params.user },
      { $set: { ...req.body } },
      { multi: true }
    );
    console.log(
      "haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaateeeeeeeeeeeeeeeeeeeeem"
    );
    res.status(201).json(plan);
  } catch (err) {
    res.status(500).json(err);
  }
}

const getOne = async (req, res) => {
  const id = req.params.id;
  const date = req.params.date;
  try {
    const currentUserPlan = await PlanModel.findOne(
      { user: id, date },
      { _id: 0 }
    )
      .populate("breakfast", { name: 1, recipe: 1, videoId: 1 })
      .populate("dinner", { name: 1, recipe: 1, videoId: 1 })
      .populate("lunch", { name: 1, recipe: 1, videoId: 1 })
      .populate("exercise1")
      .populate("exercise2")
      .populate("exercise3")
      .populate("camp");

    res.json(currentUserPlan);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateOne = async (req, res) => {
  const id = req.params.id;
  const date = req.params.date;
  try {
    const currentUpdate = await PlanModel.findOneAndUpdate(
      { user: id, date },
      req.body,
      {
        new: true,
      }
    ).exec();
    res.json(currentUpdate);
  } catch (error) {
    res.status(500).json(error);
  }
};
const reviewOne = async (req, res) => {
  const id = req.params.id;
  const date = req.params.date;
  try {
    const currentUserPlan = await PlanModel.findOne(
      { user: id, date },
      { _id: 0, camp: 1 }
    );
    console.log(currentUserPlan.camp);
    const campReview = await CampModel.findByIdAndUpdate(
      currentUserPlan.camp,
      { $push: { reviews: { user: id, rate: req.body.rate } } },
      { new: true }
    ).exec();

    res.json(campReview);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createOne,
  createForRegular,
  getRegular,
  updateRegular,
  createForExceptional,
  getExceptional,
  updateExceptional,
  getOne,
  updateOne,
  reviewOne,
};
