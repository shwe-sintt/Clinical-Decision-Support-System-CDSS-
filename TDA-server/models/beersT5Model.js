module.exports = (sequelize, DataTypes) => {

    const BeersT4 = sequelize.define("beers_t5", {
        drugs: {
            type: DataTypes.STRING,
            allowNull: false
        },
        interacting_drug_or_class: {
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
   
    return BeersT4
}