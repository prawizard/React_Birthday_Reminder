const mysql = require("mysql");
const express=require("express");

const app=express();

  var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpw",
  database: "BirthdayReminder__DB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS Friends (id VARCHAR(255), name VARCHAR(255), dob VARCHAR(255), imageURL VARCHAR(8000))"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table(Friends) created");
  });
});