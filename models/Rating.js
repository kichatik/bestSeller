const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rating = sequelize.define("Rating", {
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Rating;
