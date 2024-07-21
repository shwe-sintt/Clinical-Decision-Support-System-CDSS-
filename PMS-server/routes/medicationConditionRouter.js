const medicationConditionRouter = require('express').Router()

const medicationConditionController = require('../controllers/medicationConditionController.js')

medicationConditionRouter.post('/addData', medicationConditionController.addMedicationConditionData);
medicationConditionRouter.get('/getAllData', medicationConditionController.getAllMedicationConditionData);
medicationConditionRouter.get('/getDataById/:id', medicationConditionController.getMedicationConditionDataById);
medicationConditionRouter.get('/updateData', medicationConditionController.updateMedicationConditionData);
medicationConditionRouter.get('/deleteData', medicationConditionController.deleteMedicationConditionData);


module.exports = medicationConditionRouter