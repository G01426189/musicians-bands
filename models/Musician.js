const {Sequelize, sequelize} = require('../db');

// TODO - define the Musician model
let Musician = sequelize.define('Musician',{
    name: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    instrument: {
        type: Sequelize.STRING,
        allowNULL: false
    }
    
    })
    

module.exports = {
    Musician
};