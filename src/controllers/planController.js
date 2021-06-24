"use strict";
const CampModel = require("../models/campModel");
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
        const regularUsersInCamp = await CampModel.findById(req.body.camp).populate("users").lean().exec();
        regularUsersInCamp["users"].forEach(async function (user) {
            await new PlanModel({ ...req.body, user: user._id, type: "regular" }).save();
        })
        res.status(201).json({ data: regularUsersInCamp });
    } catch (err) {
        res.status(500).json(err);
    }
};
const getRegular = async (req, res) => {
    try {
        const plan = await new PlanModel.findOne({ camp: req.params.camp, date: req.camp.date, type: "reqular" });
        res.status(201).json({ data: plan });
    } catch (err) {
        res.status(500).json(err);
    }
};
module.exports = {
    createOne,
    createForRegular,
    getRegular
}