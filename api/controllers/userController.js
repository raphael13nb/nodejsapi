'use strict';
var User = require('../models/userModel');

exports.list_all = async function (req, res) {
    User.findAll().then(items => {
        res.json(items);
    });
};
exports.create = function (req, res) {
    User.create(req.body).then(item => {
        res.json(item);
    });
};
exports.read = function (req, res) {
    User.findById(req.params.Id).then(item => {
        res.json(item);
    });
};
exports.update = async function (req, res) {
    var updatedItem = await User.update(req.body, { where: { id: req.params.Id }, returning: false });
    if (updatedItem >= 1) {
        User.findById(req.params.Id).then(item => {
            res.json(item);
        });
    } else {
        res.json(updatedItem);
    }
};
exports.delete = function (req, res) {
    User.destroy({ where: { id: req.params.Id } }).then(() => {
        res.json({ message: 'User successfully deleted' });
    });
};