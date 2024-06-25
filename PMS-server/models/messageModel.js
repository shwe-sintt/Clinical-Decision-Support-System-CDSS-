module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define("message", {
        message_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        message_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message_text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        message_status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        createdAt: 'created_at',
        updatedAt: 'last_modifed'    // Change the name of updatedAt to endDate
    });

    return Message;
}
