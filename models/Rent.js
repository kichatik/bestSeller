const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rent = sequelize.define("Rent", {
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Rent;
