const medicationClassRouter = require('express').Router()

const medicationClassController = require('../controllers/medicationClassController.js')

medicationClassRouter.post('/addData', medicationClassController.addMedicationClassData);
medicationClassRouter.get('/getAllData', medicationClassController.getAllMedicationClassData);
medicationClassRouter.get('/getDataById/:id', medicationClassController.getMedicationClassDataById);
medicationClassRouter.get('/updateData', medicationClassController.updateMedicationClassData);
medicationClassRouter.get('/deleteData', medicationClassController.deleteMedicationClassData);


module.exports = medicationClassRouter