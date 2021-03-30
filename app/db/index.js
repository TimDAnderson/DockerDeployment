var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'insidecomposedb13',
  user: 'root',
  password: 'root',
  database: 'app_db'
});

connection.connect();

module.exports = connection;