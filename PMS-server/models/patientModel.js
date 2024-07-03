module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define("patient", {
        patient_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        patient_id_str: {
            type: DataTypes.STRING,
            allowNull: false
        },
        NRIC: {
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        admission_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        discharge_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ward: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bed: {
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

    return Patient;
}
