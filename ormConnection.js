'use strict';

const Sequelize = require("sequelize");
const sequelize = new Sequelize('ApiTest', 'sa', 'genesysjp', {
    host: 'localhost',
    port: 50000,
    dialect: 'mssql',
    freezeTableName: true,
    operatorsAliases: false,
    
});

module.exports = { Sequelize, sequelize };