module.exports = (sequelize, DataTypes) => {

    const BeersT2 = sequelize.define("beers_t3", {
        disease_or_syndrome: {
            type: DataTypes.STRING,
            allowNull: false
        },
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
   
    return BeersT2
}