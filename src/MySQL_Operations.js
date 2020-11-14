const express = require("express");
const mysql = require("mysql");

const app=express();

app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpw",
  database: "BirthdayReminder__DB"
});

app.post("/addNew", (req,res) => {
    con.query("INSERT INTO Friends (id, name, dob, imageURL) VALUES (?,?,?,?)",
    [new Date().getTime().toString(), name, dob, imageURL],
    (err,result) => {
        console.log(err);
    }
    );

});
