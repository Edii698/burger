// Import the ORM to create to interact with the burgers database.
var orm = require("../config/orm.js");

var burger = {
  // display all burgers
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // insert new burgers
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // update burgers
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
  
};

// export functions to controller
module.exports = burger;
