const { User, Rent, Rating, Item, Comment } = require('../models'); 
const sequelize = require("../config/db");

async function syncDatabase() {
    try {
        await sequelize.sync({ force: true });
        console.log("Database created");
    } catch (err) {
        console.error("Error creating database:", err);
    }
}

syncDatabase();
