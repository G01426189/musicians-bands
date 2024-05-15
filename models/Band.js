const {Sequelize, sequelize} = require('../db');

// TODO - define the Band model
let Band = sequelize.define('band',{
name: {
    type: Sequelize.STRING,
    allowNULL: false
},
genre: {
    type: Sequelize.STRING,
    allowNULL: false
}

})

module.exports = {
    Band
};