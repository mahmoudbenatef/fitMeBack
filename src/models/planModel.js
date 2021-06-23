const mongoose = require("mongoose");
const PlanScheme = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    day: {
        type: Date,
        default: Date.now()
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
    launch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
        required: true,
    },

    launchCheck: {
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
    created: {
        type: Date,
        default: Date.now,
    },
});
const PlanModel = mongoose.model("Plan", PlanScheme);
module.exports = PlanModel;
