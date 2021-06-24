const express = require("express"),

    Router = express.Router(),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt')

const { register, sign_in, users, getCategories, getCategoryBooks, exceptionalUsers } = require('../controllers/userController.js');
const { loginRequired } = require("../middlewares/AuthMiddleware.js")
const { upload } = require("../middlewares/MulterMiddleware.js")

Router.post("/register", upload.single('avatar'), register)

Router.post("/signin", sign_in)

Router.get("/", loginRequired, users)

Router.get("/exceptional", loginRequired, exceptionalUsers)

module.exports = Router
