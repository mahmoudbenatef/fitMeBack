const express = require("express")
const { createOne, } = require('../controllers/planContrleer');
const { isAdmin } = require("../middlewares/AdminMiddleware")
const Router = express.Router();
Router.route("/").post(isAdmin, createOne)
module.exports = Router;
