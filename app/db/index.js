var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'sqlcontainer',
  user: 'root',
  password: 'root',
  database: 'app_db'
});

connection.connect();

module.exports = connection;