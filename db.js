const path = require('path');
const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"), // specify the correct path
    logging: false,
    define: {
        // This option removes the 'createdAt' and 'updatedAt' columns from the tables
        timestamps: false,
    }
});

module.exports = {
    sequelize,
    Sequelize
};
