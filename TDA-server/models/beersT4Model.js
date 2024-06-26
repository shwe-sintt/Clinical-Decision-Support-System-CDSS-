module.exports = (sequelize, DataTypes) => {

    const BeersT3 = sequelize.define("beers_t4", {
        drugs: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rationale: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recommendation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity_of_evidence: {
            type: DataTypes.STRING,
            allowNull: false
        },
        strength_of_recommendation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        checking: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false // Disable createdAt and updatedAt
    });
   
    return BeersT3
}