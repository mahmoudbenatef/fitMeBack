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
},
    {
        writeConcern: {
            j: true,
            wtimeout: 1000,
        },
    });

const CategoryModel = mongoose.model("Category", CategoryScheme);
module.exports = CategoryModel;
