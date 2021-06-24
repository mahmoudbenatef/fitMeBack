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
const createForRegular = async (req, res) => {
    try {
        const exceptionalCat = await CategoryModel.findOne({ label: 'exceptional' })

        const regularUsersInCamp = await CampModel.findById(req.body.camp).populate("users").lean().exec();
        regularUsersInCamp["users"].forEach(async function (user) {
            if (user.categoryID !== exceptionalCat)
                await new PlanModel({ ...req.body, user: user._id, type: "regular" }).save();
        })

        res.status(201).json({ data: regularUsersInCamp });
    } catch (err) {
        res.status(500).json(err);
    }
};
const getRegular = async (req, res) => {
    try {
        const plan = await PlanModel.findOne({ camp: req.params.camp, date: req.params.date, type: "regular" }).lean().exec();
        res.status(201).json(plan);
    } catch (err) {
        res.status(500).json(err);
    }
};
async function updateRegular(req, res) {
    try {
        const plan = await PlanModel.update({ camp: req.params.camp, date: req.params.date, type: "regular" }, { "$set": { ...req.body } }, { "multi": true })
        res.status(201).json(plan);
    } catch (err) {
        res.status(500).json(err);
    }

}
module.exports = {
    createOne,
    createForRegular,
    getRegular,
    updateRegular
}