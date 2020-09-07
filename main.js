var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "U4269646",
  password: "howa123456789!"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
