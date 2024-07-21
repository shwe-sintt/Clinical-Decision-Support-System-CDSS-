const userRouter = require('express').Router()

const userController = require('../controllers/userController.js')


userRouter.get('/', userController.addData);



module.exports = userRouter