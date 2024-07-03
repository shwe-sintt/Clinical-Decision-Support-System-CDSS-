module.exports = (sequelize, DataTypes) => {
  const MedicalStaff = sequelize.define(
    "medical_staff",
    {
      staff_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      staff_id_str: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      NRIC: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birth_date: {
        type: DataTypes.DATE,
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
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
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
      createdAt: "start_date",
      updatedAt: "end_date",
      deletedAt: "deleted_at",
      paranoid: true, // enables soft deletes
    }
  );

  return MedicalStaff;
};
