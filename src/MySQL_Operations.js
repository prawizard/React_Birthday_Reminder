const express = require("express");
const mysql = require("mysql");
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpw",
  database: "BirthdayReminder__DB"
});

app.post("/addNew", (req,res) => {

    console.log("inside post method");
    const name=req.body.friendName;
    const dob=req.body.birthDay;
    const imageURL=req.body.imgURL;
    console.log(name,dob,imageURL);
    con.query("INSERT INTO Friends (id, name, dob, imageURL) VALUES (?,?,?,?)",
    [new Date().getTime().toString(), name, dob, imageURL],
    (err,result) => {
        console.log(err);
    }
    );

});

app.listen(3000, () => {
    console.log("Server up");
});
