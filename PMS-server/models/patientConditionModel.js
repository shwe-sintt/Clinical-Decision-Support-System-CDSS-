module.exports = (sequelize, DataTypes) => {
    const PatientCondition = sequelize.define("patient_condition", {
        patient_condition_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        severity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        remarks: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        createdAt: 'start_date',
        updatedAt: 'end_date' 
    });

    return PatientCondition;
}
