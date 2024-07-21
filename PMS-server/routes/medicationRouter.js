const medicationRouter = require('express').Router()

const medicationController = require('../controllers/medicationController.js')

medicationRouter.post('/addData', medicationController.addMedicationData);
medicationRouter.get('/getAllData', medicationController.getAllMedicationData);
medicationRouter.get('/getDataById/:id', medicationController.getMedicationDataById);
medicationRouter.get('/updateData', medicationController.updateMedicationData);
medicationRouter.get('/deleteData', medicationController.deleteMedicationData);


module.exports = medicationRouter