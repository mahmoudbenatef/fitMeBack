const mongoose = require("mongoose");


const CampScheme = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
    created: {
        type: Date,
        default: Date.now,
    },
});

const CampModel = mongoose.model("Camp", CampScheme);
module.exports = CampModel;
