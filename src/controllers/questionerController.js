"use strict";
const QuestionerModel = require("../models/questionerModel");
const UserModel = require("../models/userModel")
const CategoryModel = require("../models/categoryModel")
const createOne = async (req, res) => {
    try {
        const doc = await new QuestionerModel({ ...req.body }).save();
        updateUserCategory(req.body)
        res.status(201).json({ data: { ...req.body } });
    } catch (err) {
        res.status(500).json(err);
    }
};
const getUserQuestioner = async (req, res) => {
    const doc = await QuestionerModel.findOne({ user: req.params.id });
    // await QuestionerModel.deleteMany({ user: req.params.id })
    res.json(doc)

}

const updateUserQuestioner = async (req, res) => {
    try {
        const updated = await QuestionerModel.findOneAndUpdate(
            { _id: req.params.id },
            { ...req.body },
            { new: true } // return the new updated
        )
            .lean()
            .exec();
        updateUserCategory(req.body)
        res.json({ updated })
    }
    catch (err) {

    }
}
const updateUserCategory = async (questioner) => {
    if (questioner.majorOrMinorSurgeryShouldBeMadeAwareOf || questioner.takingAnyMedicationOfWhichWeShouldBeMadeAwareOf
        || questioner.reasonWhyYouShouldNotParticipateInPhysicalActivity || questioner.highLowBloodPressure
        || questioner.jointProblem || questioner.feelFaintOrDizzy || questioner.feelPainInYourChest
        || questioner.heartCondition
    ) {
        const exceptionalCat = await CategoryModel.findOne({ label: 'exceptional' })

        await UserModel.findOneAndUpdate({ _id: questioner.user }, { categoryID: exceptionalCat._id })
    }
    else {
        const regularCat = await CategoryModel.findOne({ label: 'regular' })

        await UserModel.findOneAndUpdate({ _id: questioner.user }, { categoryID: regularCat._id })

    }

}
module.exports = {
    createOne, getUserQuestioner, updateUserQuestioner
}