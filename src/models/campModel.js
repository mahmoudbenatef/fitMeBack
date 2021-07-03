const mongoose = require("mongoose");

const CampScheme = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: [],
    },
  ],
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rate: { type: Number, min: 0, max: 5, default: 0 },
    },
  ],
  avgRate: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
}, {
  writeConcern: {
    j: true,
    wtimeout: 1000,
  },
}



);

const CampModel = mongoose.model("Camp", CampScheme);
module.exports = CampModel;
