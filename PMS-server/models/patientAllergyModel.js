module.exports = (sequelize, DataTypes) => {
    const PatientAllergy = sequelize.define("patient_allergy", {
        patient_allergy_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        discover_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        remarks: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false // Disable createdAt and updatedAt
    });

    return PatientAllergy;
}
