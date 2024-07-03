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

    return Medication;
}
