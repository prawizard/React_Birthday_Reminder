const mysql = require("mysql");


  
  var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpw'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("CREATE DATABASE BirthdayReminder__DB", function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });

  });