const express = require("express")
const { createOne, getAll, deleteOne, updateOne, getAvailCamps, registerUser } = require('../controllers/campController');
const { isAdmin } = require("../middlewares/AdminMiddleware")
const paginateMode = require("../middlewares/paginateModel");
const CampModel = require("../models/campModel");
Router = express.Router();
Router.route("/").post(isAdmin, createOne).get(paginateMode(CampModel), getAll);
Router.route("/:id").delete(isAdmin, deleteOne).put(isAdmin, updateOne);
Router.route("/availCamps").get(getAvailCamps);
Router.get("/:campID/:userID", registerUser);
module.exports = Router;
