module.exports = (sequelize, DataTypes) => {
    const PatientMedication = sequelize.define("patient_medication", {
        patient_medication_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        dosage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dosage_unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        frequency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        createdAt: 'start_date',
        updatedAt: 'end_date' 
    });

    return PatientMedication;
}
