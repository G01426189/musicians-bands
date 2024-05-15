const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
let Song = sequelize.define('song',{
    title: {
        type: Sequalize.STRING,
        allowNULL: false
    },
    year: {
        type: Sequalize.INTEGER,
        allowNULL: false
    },
    length: {
        type: Sequalize.INTEGER,
        allowNULL: false
    }
    })
    

module.exports = {
    Song
};