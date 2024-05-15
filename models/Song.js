const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
let Song = sequelize.define('song',{
    title: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNULL: false
    },
    length: {
        type: Sequelize.INTEGER,
        allowNULL: false
    }
    })
    

module.exports = {
    Song
};