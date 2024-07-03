module.exports = (sequelize, DataTypes) => {
  const MedicationClass = sequelize.define(
    "medication_class",
    {
      class_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      class_id_str: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      indication: {
        type: DataTypes.STRING,
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
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
    }
  );

  return MedicationClass;
};
