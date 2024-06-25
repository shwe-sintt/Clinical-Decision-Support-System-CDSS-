module.exports = (sequelize, DataTypes) => {
    const Report = sequelize.define("report", {
        report_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        report_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        weigth: {
            type: DataTypes.FLOAT,
            allowNull: false   
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: false   
        },
        blood_pressure_systolic: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        blood_pressure_diastolic: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        renal_function: {
            type: DataTypes.FLOAT,
            allowNull: false   
        },
        potassium_level: {
            type: DataTypes.FLOAT,
            allowNull: false   
        },
        sodium_level: {
            type: DataTypes.FLOAT,
            allowNull: false   
        },
        calcium_level: {
            type: DataTypes.FLOAT,
            allowNull: false   
        },
        blood_glucose: {
            type: DataTypes.FLOAT,
            allowNull: false   
        },
        tube_feeding_status: {
            type: DataTypes.BOOLEAN,
            allowNull: false   
        },
        estimated_prognosisLT1Y: {
            type: DataTypes.BOOLEAN,
            allowNull: false   
        },
        mobility_cat_status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        eng_stage_disease: {
            type: DataTypes.BOOLEAN,
            allowNull: false   
        },
        severe_funtional_or_cognitive_disability: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        goals_towards_symptoms_control: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false // Disable createdAt and updatedAt
    });

    return Report;
}
