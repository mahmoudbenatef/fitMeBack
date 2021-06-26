const express = require("express")
const { createOne, createForRegular, getRegular, updateRegular, createForExceptional, getExceptional, updateExceptional, getOne, updateOne,reviewOne } = require('../controllers/planController');
const { isAdmin } = require("../middlewares/AdminMiddleware")
const Router = express.Router();
Router.route("/").post(isAdmin, createOne);
Router.route("/:id/:date").get(getOne);
Router.route("/:id/:date").patch(updateOne);
Router.route("/:id/:date/review").patch(reviewOne);


Router.route("/regular").post(isAdmin, createForRegular);
Router.route("/exceptional").post(isAdmin, createForExceptional);
Router.route("/regular/:camp/:date").get(isAdmin, getRegular).put(isAdmin, updateRegular);
Router.route("/exceptional/:camp/:date/:user").get(isAdmin, getExceptional)
    .put(isAdmin, updateExceptional);
module.exports = Router;

