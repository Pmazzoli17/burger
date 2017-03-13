// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.all('burgers',function(res){
			cb(res);
		})
     }
  }

  module.exports = burger;

 //  var burger = {
	// all: function(tableInput, cb) {
	// 	connection.query('SELECT * FROM '+tableInput+';', function(err, result){
	// 		if(err) throw err;
	// 		cb(result)
	// 	})
 //     }
 //  }