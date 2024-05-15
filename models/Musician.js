const {Sequelize, sequelize} = require('../db');

// TODO - define the Musician model
let Musician = sequelize.define('musician',{
    name: {
        type: Sequalize.STRING,
        allowNULL: false
    },
    instrument: {
        type: Sequalize.STRING,
        allowNULL: false
    }
    
    })
    

module.exports = {
    Musician
};