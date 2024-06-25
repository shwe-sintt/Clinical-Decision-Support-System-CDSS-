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
        }
    },
    {
        createdAt: 'review_start_date',
        updatedAt: 'review_end_date'
    });
   
    return Review
}