module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    review_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    review_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deleted_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    review_start_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    review_end_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  });

  return Review;
};
