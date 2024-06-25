module.exports = (sequelize, DataTypes) => {
    const MedicationClass = sequelize.define("medication_class", {
        class_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        class_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        indication: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false // Disable createdAt and updatedAt
    });

    return MedicationClass;
}
