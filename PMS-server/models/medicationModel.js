module.exports = (sequelize, DataTypes) => {
    const Medication = sequelize.define("medication", {
        medication_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        generic_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dosage: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        dosage_unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        frequency: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false // Disable createdAt and updatedAt
    });

    return Medication;
}
