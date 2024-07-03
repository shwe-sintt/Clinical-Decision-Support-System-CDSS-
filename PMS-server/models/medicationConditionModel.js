module.exports = (sequelize, DataTypes) => {
    const MedicationCondition = sequelize.define("medication_condition", {
        condition_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        condition_id_str: {
            type: DataTypes.STRING,
            allowNull: false
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deleted_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    });

    return MedicationCondition;
}
