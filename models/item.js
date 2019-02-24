module.exports = (sequelize, DataTypes) => {
    return sequelize.define('item', {
        name : {
            type : DataTypes.STRING,
            allowNull: false
        },

        flavorText : {
            type : DataTypes.STRING,
            allowNull: false
        },

        value: {
            type : DataTypes.INTEGER,
            allowNull: false
        },

        weight: {
            type : DataTypes.INTEGER,
            allowNull: false
        }

    })
}