const patientConditionRouter = require('express').Router()

const patientConditionController = require('../controllers/patientConditionController.js')

patientConditionRouter.post('/addData', patientConditionController.addPatientConditionData);
patientConditionRouter.get('/getAllData', patientConditionController.getAllPatientConditionData);
patientConditionRouter.get('/getDataById/:id', patientConditionController.getPatientConditionDataById);
patientConditionRouter.post('/updateData/:id', patientConditionController.updatePatientConditionData);
patientConditionRouter.post('/deleteData/:id', patientConditionController.deletePatientConditionData);
patientConditionRouter.get('/getDataByPatientId/:id', patientConditionController.getPatientConditionByPatientId);
 

module.exports = patientConditionRouter