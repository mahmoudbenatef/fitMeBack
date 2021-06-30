const express = require("express")
const { createOne, getAll } = require('../controllers/messageController');
const { isAdmin } = require("../middlewares/AdminMiddleware")
Router = express.Router()
Router.route("/").post(isAdmin, createOne).get(getAll)
module.exports = Router

