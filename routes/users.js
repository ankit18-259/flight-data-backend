var express = require('express');
var router = express.Router();
const connection = require('../connection')
const cors = require('cors');
express().use(cors());

router.post('/signup', function(req, res, next) {
  console.log(req.body)
  sql = "INSERT INTO userData (username, email, password) VALUES('" + req.body.body.username + "', '" + req.body.body.email + "', '" + req.body.body.password + "');"
  console.log(sql)
  connection.query(sql, (err, rows, fields) => {
      if(!err)
      {
        res.send("SIGN UP SUCCESSFUL")
      }
      else
      {
        console.log(err)
      }
  });
  sql2 = "CREATE TABLE "+req.body.body.username+" (name VARCHAR(255), age VARCHAR(255), dob VARCHAR(255), contact VARCHAR(255), email VARCHAR(255), flightno VARCHAR(255), source VARCHAR(255), destination VARCHAR(255), date VARCHAR(255), flightcompany VARCHAR(255));"
  console.log(sql2)
  connection.query(sql2)
})

router.post('/login', function(req, res, next){
  
  sql = "SELECT username, password FROM userData WHERE username='" + req.body.body.username +"';" 
  connection.query(sql, (err, rows, fields) => {
    if(!err)
    {
      if (req.body.body.password = rows[0].password)
      { 
        res.send("Authenticated")
      }
    }
    else
    {
      console.log("error")
    }
  })
})
module.exports = router;
