'use strict';
const UserModel = require("../models/userModel")
const bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken')

var mongoose = require('mongoose')
const { loginRequired } = require("../middlewares/AuthMiddleware.js");
const CategoryModel = require("../models/categoryModel");


const register = async function (req, res) {
    const userData = req.body
    const userInstance = new UserModel({ ...userData, avatar: req.file.path, password: bcrypt.hashSync(req.body.password, 10) })
    try {
        let user = await userInstance.save()
        user.password = undefined;
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }
};



const sign_in = function (req, res) {
    UserModel.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err)
            return res.status(401).json({ message: 'error in the database.' });
        if (!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        res.status(201).json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs'), user: user });
    });
};

const users = async function (req, res) {

    try {
        const users = await UserModel.find({})
        res.status(201).json(users)
    }
    catch (err) {
        res.send("bye")
    }

}
const exceptionalUsers = async function (req, res) {

    try {
        const exceptionalCat = await CategoryModel.findOne({ label: 'exceptional' })
        console.log(exceptionalCat);
        const users = await UserModel.find({ categoryID: exceptionalCat })
        res.status(201).json(users)
    }
    catch (err) {
        res.send("bye")
    }

}


module.exports = {
    register, sign_in, users, exceptionalUsers
}