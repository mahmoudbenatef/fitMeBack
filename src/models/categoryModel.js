const mongoose = require("mongoose");


const CategoryScheme = new mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

const CategoryModel = mongoose.model("Category", CategoryScheme);
module.exports = CategoryModel;
