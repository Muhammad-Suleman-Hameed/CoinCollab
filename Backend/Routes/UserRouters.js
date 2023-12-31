const express = require("express")
const router = express.Router()
const userController = require('../Controller/UserController')


router.
    post('/signup', userController.signUp )
    // .post('/mail', userController.sendEmail )
    .post('/login', userController.login )
    .get('/get', userController.getUser )
    .patch('/resetPassword', userController.resetPasswordUser )

exports.router = router