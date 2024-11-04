const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Item = sequelize.define("Item", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'available',
    },
}, {
    timestamps: false,
});

module.exports = Item;
