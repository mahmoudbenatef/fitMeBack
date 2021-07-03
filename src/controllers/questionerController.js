"use strict";
const QuestionerModel = require("../models/questionerModel");
const UserModel = require("../models/userModel")
const CategoryModel = require("../models/categoryModel")
const createOne = async (req, res) => {
    try {
        const doc = await new QuestionerModel({ ...req.body }).save();
        const user = await updateUserCategory(req.body)
        res.status(200).json(user);
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
    var user;
    if (questioner.majorOrMinorSurgeryShouldBeMadeAwareOf || questioner.takingAnyMedicationOfWhichWeShouldBeMadeAwareOf
        || questioner.reasonWhyYouShouldNotParticipateInPhysicalActivity || questioner.highLowBloodPressure
        || questioner.jointProblem || questioner.feelFaintOrDizzy || questioner.feelPainInYourChest
        || questioner.heartCondition
    ) {
        const exceptionalCat = await CategoryModel.findOne({ label: 'exceptional' })

        user = await UserModel.findOneAndUpdate({ _id: questioner.user }, { categoryID: exceptionalCat._id }, { new: true })
            .exec();
        console.log(user);
        return user
    }
    else {
        const regularCat = await CategoryModel.findOne({ label: 'regular' })
        user = await UserModel.findOneAndUpdate({ _id: questioner.user }, { categoryID: regularCat._id }, { new: true })
        console.log(user);
        return user

    }

}
module.exports = {
    createOne, getUserQuestioner, updateUserQuestioner
}