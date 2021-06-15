const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const UserScheme = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    //  required: true,
    enum: ["Male", "Female"],
  },
  maritalStatus: {
    type: String,
    required: true,
    enum: ["single", "married", "divorced", "Widower"],
    default: "single",
  },

  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },

  nationality: {
    type: String,
    required: true,
  },

  countryOfResidence: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  NationalIdOrPassportNo: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  basalMetabolicRate: {
    type: Number,
    required: true,
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  password: String,
  avatar: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user", "author"],
    default: "user",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

UserScheme.methods.comparePassword = function (password, hash_password) {
  try {
    return bcrypt.compareSync(password, this.password);
  } catch (err) {
    console.log(err);
  }
};



const UserModel = mongoose.model("User", UserScheme);
module.exports = UserModel;
