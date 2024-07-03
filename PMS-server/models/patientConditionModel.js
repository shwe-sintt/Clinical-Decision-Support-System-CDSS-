module.exports = (sequelize, DataTypes) => {
  const PatientCondition = sequelize.define(
    "patient_condition",
    {
      patient_condition_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      severity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      remarks: {
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
      deletedAt: "deleted_at",
      paranoid: true,
    }
  );

  return PatientCondition;
};
