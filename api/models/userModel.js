'use strict';
var orm = require('../../ormConnection');

var User = orm.sequelize.define('user', {
    firstName: {
        type: orm.Sequelize.STRING
    },
    lastName: {
        type: orm.Sequelize.STRING
    }
}, {
        freezeTableName: true // Model tableName will be the same as the model name
    });

orm.sequelize.sync();
module.exports = User;