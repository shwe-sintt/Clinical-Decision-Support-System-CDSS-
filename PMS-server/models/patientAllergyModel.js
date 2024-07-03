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
        deleted_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    });
    return PatientAllergy;
}
