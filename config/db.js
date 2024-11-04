const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("rent_db", "root", "",{
    host: "localhost",
    dialect: "mysql",
    logging: console.log
});

module.exports = sequelize