var Sequelize = require('sequelize');
var db = new Sequelize('api-rtp','root','', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = db;