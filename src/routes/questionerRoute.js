const express = require("express")
const { loginRequired } = require("../middlewares/AuthMiddleware")
const { createOne, getUserQuestioner, updateUserQuestioner } = require("../controllers/questionerController")
Router = express.Router()
Router.route("/").post(loginRequired, createOne).get()
Router.get("/user/:id", loginRequired, getUserQuestioner)
Router.route("/:id").put(updateUserQuestioner)
module.exports = Router
