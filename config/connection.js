// Require mysql
var mysql = require('mysql');

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db'
})

// Connect to the database
connection.connect(function(err){
  if(err)throw err;
  console.log("connected as id: " + connection.threadId);
});

// Export connection for the ORM to use 
module.exports = connection;