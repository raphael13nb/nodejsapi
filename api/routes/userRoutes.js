'use strict';
module.exports = function (app) {
    var userController = require('../controllers/userController');

    // users Routes
    app.route('/users')
        .get(userController.list_all)
        .post(userController.create);
    app.route('/users/:Id')
        .get(userController.read)
        .put(userController.update)
        .delete(userController.delete);
};