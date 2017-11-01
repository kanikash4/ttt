"use strict";

var error = require('./error');
var respond = require('./respond');

module.exports = function(app) {

  app.all('/_status', function(req, res, next) {
    res.sendStatus(200);
  });

};
