module.exports = (sequelize, DataTypes) => {
  const PatientMedication = sequelize.define(
    "patient_medication",
    {
      patient_medication_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deleted_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      createdAt: "start_date",
      updatedAt: "end_date",
      deletedAt: "deleted_at",
      paranoid: true,
    }
  );

  return PatientMedication;
};
