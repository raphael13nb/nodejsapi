'use strict';

const Sequelize = require("sequelize");
const sequelize = new Sequelize('ApiTest', 'sa', '!InfinitSolucoes11', {
    host: 'infinitvmlinuxdb.brazilsouth.cloudapp.azure.com',
    port: 1433,
    dialect: 'mssql',
    freezeTableName: true,
    operatorsAliases: false,
    
});

module.exports = { Sequelize, sequelize };