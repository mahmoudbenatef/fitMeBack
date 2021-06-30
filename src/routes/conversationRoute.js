const express = require("express")
const { createOne, getAll } = require('../controllers/conversationController');
const { isAdmin } = require("../middlewares/AdminMiddleware")
Router = express.Router()
Router.route("/").post(isAdmin, createOne)
Router.route("/:userId").get(getAll)

// Router.route('/:id')
// Router.route("/:id").delete(isAdmin, deleteOne).put(updateOne)
module.exports = Router

