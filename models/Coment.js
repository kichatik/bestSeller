const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Comment = sequelize.define("Comment", {
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE, 
        allowNull: false, 
    },
}, {
    timestamps: false,
});

module.exports = Comment;
