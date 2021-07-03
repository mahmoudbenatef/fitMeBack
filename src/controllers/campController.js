"use strict";
const CampModel = require("../models/campModel.js");
const createOne = async (req, res) => {
    try {
        if (validateDate(req.body.date)) {
            const latestCamp = await CampModel.findOne({}, {}, { sort: { 'date': -1 } }).lean().exec();
            if (latestCamp) {
                var someDate = latestCamp.date;
                var numberOfDaysToAdd = 7;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
            }
            if (
                latestCamp == null
                || Date.parse(someDate) < Date.parse(req.body.date)
            ) {
                const doc = await new CampModel({ ...req.body }).save();
                res.status(201).json({ data: doc });
            }
            else
                res.status(500).json({ err: "there must be 7 days after the last added camp which will be avail in " + someDate });
        }
        else {
            res.status(500).json({ err: "You can't add camp today or less than today " });
        }

    } catch (err) {
        res.status(500).json(err);
    }
};
async function getCamp(req, res) {
    try {
        const camp = await CampModel.findById(req.params.id);
        res.status(200).json(camp)

    }
    catch (err) {
        res.status(500).json(err)
    }
}
function validateDate(date) {
    var ToDate = new Date();
    if (new Date(date).getTime() <= ToDate.getTime()) {
        return false;
    }
    return true;
}

const getAll = async (req, res) => {
    if (req.paginatedResult.data.length > 0)
        return res.status(200).json(req.paginatedResult); // collection has data
    return res.status(500).end(); // collection is empty
};
const getAvailCamps = async (req, res) => {
    try {
        // log
        var today = new Date();
        const camps = await CampModel.find({ date: { $gt: today } });
        res.status(200).json(camps);
    } catch (err) {
        return res.status(500).end(err); // collection is empty

    }
};
const registerUser = async (req, res) => {
    try {
        console.log(`camp id is ${req.params.campID} and user id is ${req.params.userID}`);
        const camp = await CampModel.findOne({ _id: req.params.campID });
        camp.users.push(req.params.userID);
        camp.save();
        res.status(201).json(camp)
    }
    catch (err) {
        res.status(500).json(err)

    }
};
const deleteOne = async (req, res) => {
    try {
        await CampModel.deleteOne({ _id: req.params.id });
        res.status(200).end();
    } catch (err) {
        res.end(err);
    }
};

const updateOne = async (req, res) => {
    try {
        //   const category = await CampModel.find({ label: req.body.label })
        //     .lean()
        //     .exec();
        //   if (category.length > 0) {
        //     return res
        //       .status(500)
        //       .json({ errors: { label: { message: "category is unique" } } });
        //   }

        const updated = await CampModel.findOneAndUpdate(
            { _id: req.params.id },
            { ...req.body },
            { new: true } // return the new updated
        )
            .lean()
            .exec();
        res.status(201).json({ data: updated });
    } catch (err) {
        res.end(err);
    }
    res.status(200).end();
};
module.exports = {
    createOne,
    getAll,
    deleteOne,
    updateOne,
    getAvailCamps,
    registerUser,
    getCamp
};
