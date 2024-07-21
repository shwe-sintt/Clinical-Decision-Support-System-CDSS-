const medicalStaffRouter = require('express').Router()

const medicalStaffController = require('../controllers/medicalStaffController.js')

medicalStaffRouter.post('/addData', medicalStaffController.addStaffData);
medicalStaffRouter.get('/getAllData', medicalStaffController.getAllStaffData);
medicalStaffRouter.get('/getDataById/:id', medicalStaffController.getStaffDataById);
medicalStaffRouter.get('/getDataByEmail', medicalStaffController.getStaffDataByEmail);
medicalStaffRouter.get('/updateData', medicalStaffController.updateStaffData);
medicalStaffRouter.get('/deleteData', medicalStaffController.deleteStaffData);
medicalStaffRouter.post('/login', medicalStaffController.login);


module.exports = medicalStaffRouter