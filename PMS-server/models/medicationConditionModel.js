module.exports = (sequelize, DataTypes) => {
    const MedicationCondition = sequelize.define("medication_condition", {
        condition_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false // Disable createdAt and updatedAt
    });

    return MedicationCondition;
}
