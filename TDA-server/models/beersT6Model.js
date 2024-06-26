module.exports = (sequelize, DataTypes) => {

    const BeersT5 = sequelize.define("beers_t6", {
        drugs: {
            type: DataTypes.STRING,
            allowNull: false
        },
        crcl_ml_min_at_which_action_is_required: {
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
   
    return BeersT5
}