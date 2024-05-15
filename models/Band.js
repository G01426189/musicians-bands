const {Sequelize, sequelize} = require('../db');

// TODO - define the Band model
let Band = sequelize.define('band',{
name: {
    type: Sequalize.STRING,
    allowNULL: false
},
genre: {
    type: Sequalize.STRING,
    allowNULL: false
}

})

module.exports = {
    Band
};