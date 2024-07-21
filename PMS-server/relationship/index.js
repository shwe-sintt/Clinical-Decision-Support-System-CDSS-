const db = require('../models')

// review and message
db.review.hasMany(db.message, {
    foreignKey: 'review_id',
    as: 'review'
})
db.message.belongsTo(db.review, {
    foreignKey: 'review_id',
    as: 'message'
})

// patient and review
db.patient.hasMany(db.review, {
    foreignKey: 'patient_id',
    as: 'patientToReview'
})
db.review.belongsTo(db.patient, {
    foreignKey: 'patient_id',
    as: 'reviewToPatient'
})

// patient and report
db.patient.hasMany(db.report, {
    foreignKey: 'patient_id',
    as: 'patienToReport'
})
db.report.belongsTo(db.patient, {
    foreignKey: 'patient_id',
    as: 'ReportToPatient'
})

// patient and patientCondition
db.patient.hasMany(db.patientCondition, {
    foreignKey: 'patient_id',
    as: 'patientToPatientCondition'
})
db.patientCondition.belongsTo(db.patient, {
    foreignKey: 'patient_id',
    as: 'patientConditionToPatient'
})

// patient and patientAllergy
db.patient.hasMany(db.patientAllergy, {
    foreignKey: 'patient_id',
    as: 'patientToPatientAllergy'
})
db.patientAllergy.belongsTo(db.patient, {
    foreignKey: 'patient_id',
    as: 'patientAllergyToPatient'
})

// medicationCondition and patientCondition
db.medicationCondition.hasMany(db.patientCondition, {
    foreignKey: 'condition_id',
    as: 'medicationConditionToPatientCondition'
})
db.patientCondition.belongsTo(db.medicationCondition, {
    foreignKey: 'condition_id',
    as: 'patientConditionToMedicationCondition'
})

// patientCondition and report
db.patientCondition.hasMany(db.report, {
    foreignKey: 'patient_condition_id',
    as: 'patientConditionToReport'
})
db.report.belongsTo(db.patientCondition, {
    foreignKey: 'patient_condition_id',
    as: 'ReportToPatientCondition'
})

// patientMedication and patient
db.patient.hasMany(db.patientMedication, {
    foreignKey: 'patient_id',
    as: 'patientTopatientMedication'
})
db.patientMedication.belongsTo(db.patient, {
    foreignKey: 'patient_id',
    as: 'patientMedicationToPatient'
})

// patientMedication and Medication
db.medication.hasMany(db.patientMedication, {
    foreignKey: 'medication_id',
    as: 'medicationToPatientMedication'
})
db.patientMedication.belongsTo(db.medication, {
    foreignKey: 'medication_id',
    as: 'patientMedicationToMedication'
})

// MedicationClass and Medication
db.medicationClass.hasMany(db.medication, {
    foreignKey: 'class_id',
    as: 'medicationClassToMedication'
})
db.medication.belongsTo(db.medicationClass, {
    foreignKey: 'class_id',
    as: 'medicationToMedicationClass'
})

// Medication and patientAllergy
db.medication.hasMany(db.patientAllergy, {
    foreignKey: 'medication_id',
    as: 'medicationToPatientAllergy'
})
db.patientAllergy.belongsTo(db.medication, {
    foreignKey: 'medication_id',
    as: 'patientAllergyToMedication'
})

// medicalStaff and patientMedication
db.medicalStaff.hasMany(db.patientMedication, {
    foreignKey: 'prescribed_by',
    as: 'medicalStaffToPatientMedication'
})
db.patientMedication.belongsTo(db.medicalStaff, {
    foreignKey: 'prescribed_by',
    as: 'patientMedicationToMedicalStaff'
})

// medicalStaff and report
db.medicalStaff.hasMany(db.report, {
    foreignKey: 'entered_by',
    as: 'medicalStaffToReport'
})
db.report.belongsTo(db.medicalStaff, {
    foreignKey: 'entered_by',
    as: 'reportToMedicalStaff'
})

// medicalStaff and review
db.medicalStaff.hasMany(db.review, {
    foreignKey: 'closed_by',
    as: 'medicalStaffToReview'
})

db.review.belongsTo(db.medicalStaff, {
    foreignKey: 'closed_by',
    as: 'reviewToMedicalStaff'
})

// medicalStaff and message
db.medicalStaff.hasMany(db.message, {
    foreignKey: 'created_by',
    as: 'medicalStaffToMessage'
})

db.message.belongsTo(db.medicalStaff, {
    foreignKey: 'created_by',
    as: 'messageToMedicalStaff'
})

module.exports = db