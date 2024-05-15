const path = require('path');
const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const sequelize = new Sequelize;
module.exports = {
    sequelize,
    Sequelize
};
