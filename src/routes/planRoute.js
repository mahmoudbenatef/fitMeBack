const express = require("express")
const { createOne, createForRegular } = require('../controllers/planController');
const { isAdmin } = require("../middlewares/AdminMiddleware")
const Router = express.Router();
Router.route("/").post(isAdmin, createOne);
Router.route("/regular").post(createForRegular);
module.exports = Router;