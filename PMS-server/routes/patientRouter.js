const patientRouter = require('express').Router()

const patientController = require('../controllers/patientController.js')

patientRouter.post('/addData', patientController.addPatientData);
patientRouter.get('/getAllData', patientController.getAllPatientData);
patientRouter.get('/getDataById/:id', patientController.getPatientDataById);
patientRouter.post('/updateData/:id', patientController.updatePatientData);
patientRouter.post('/deleteData/:id', patientController.deletePatientData);


module.exports = patientRouter