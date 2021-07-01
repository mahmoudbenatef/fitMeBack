"use strict";
const ConversationModel = require("../models/conversationModel");

const createOne = async (req, res) => {
    try {
        const doc = await new ConversationModel({ ...req.body }).save();
        const conversation = await ConversationModel.findById(doc._id)
            .populate({
                path: 'users',
            })
            .lean().exec();
        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json(err);
    }
};

// const deleteOne = async (req, res) => {
//     try {
//         await CategoryModel.deleteOne({ _id: req.params.id });
//         res.status(200).end();
//     } catch (err) {
//         res.end(err);
//     }
// };

// const updateOne = async (req, res) => {
//   try {
//     const category = await CategoryModel.find({ label: req.body.label })
//       .lean()
//       .exec();
//     if (category.length > 0) {
//       return res
//         .status(500)
//         .json({ errors: { label: { message: "category is unique" } } });
//     }

//     const updated = await CategoryModel.findOneAndUpdate(
//       { _id: req.params.id },
//       { ...req.body },
//       { new: true } // return the new updated
//     )
//       .lean()
//       .exec();
//     res.status(201).json({ data: updated });
//   } catch (err) {
//     res.end(err);
//   }
//   res.status(200).end();
// };



const getAll = async (req, res) => {
    try {
        console.log(req.params);
        const conversations = await ConversationModel.find({ users: { $elemMatch: { $eq: req.params.userId } } })
            .populate({
                path: 'users',
            })
            .lean().exec();
        return res.status(200).json(conversations); // collection has data
    }
    catch (err) {
        return res.status(500).end(err); // collection is empty
    }
};

module.exports = {
    createOne,
    getAll,
};

