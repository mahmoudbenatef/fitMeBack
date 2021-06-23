const express = require("express")
const { createOne,getOne,updateOne } = require('../controllers/planContrleer');
const { isAdmin } = require("../middlewares/AdminMiddleware")
const Router = express.Router();
Router.route("/").post(isAdmin, createOne);
Router.route("/:id/:date").get(getOne);
Router.route("/:id/:date").patch(updateOne);

module.exports = Router;
