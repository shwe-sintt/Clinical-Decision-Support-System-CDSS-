module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("review", {
        review_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        review_status: {
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
    },
    {
        createdAt: 'review_start_date',
        updatedAt: 'review_end_date',
        deletedAt: 'deleted_at',
        paranoid: true
    });
   
    return Review
}