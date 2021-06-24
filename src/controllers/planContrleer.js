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

module.exports = {
    createOne
}