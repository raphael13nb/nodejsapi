var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Sequelize = require('sequelize'),
  User = require('./api/models/userModel'),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var userRoutes = require('./api/routes/userRoutes'); //importing route
userRoutes(app); //register the route

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});


app.listen(port);
console.log('todo list RESTful API server started on: ' + port);