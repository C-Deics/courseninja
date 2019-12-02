var mysql = require("mysql");

var db = null;
module.exports = function() {
  if (!db) {
    db = mysql.createConnection({
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database
    });
  }
  return db;
};
