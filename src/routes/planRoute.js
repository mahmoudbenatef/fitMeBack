const express = require("express")
const { createOne, createForRegular, getRegular, updateRegular } = require('../controllers/planController');
const { isAdmin } = require("../middlewares/AdminMiddleware")
const Router = express.Router();
Router.route("/").post(isAdmin, createOne);
Router.route("/regular").post(isAdmin, createForRegular);
Router.route("/regular/:camp/:date").get(isAdmin, getRegular).put(isAdmin, updateRegular);
module.exports = Router;