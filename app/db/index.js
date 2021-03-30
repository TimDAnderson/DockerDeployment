var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'sqlcontainer',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect();

module.exports = connection;