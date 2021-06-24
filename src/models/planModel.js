const mongoose = require("mongoose");
let currentDate = new Date();
currentDate.setUTCHours(0, 0, 0, 0);
const PlanScheme = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    camp: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Camp",
        required: true,
    },

    breakfast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
        required: true,
    },

    breakfastCheck: {
        type: Boolean,
        default: false,
    },
    lunch: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
        required: true,
    },

    lunchCheck: {

        type: Boolean,
        default: false,
    },
    dinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
        required: true,
    },
    dinnerCheck: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        enum: ["regular", "exceptional"],
        default: "exceptional"
    },

    created: {
        type: Date,
        default: Date.now,
    },
});
const PlanModel = mongoose.model("Plan", PlanScheme);
module.exports = PlanModel;

