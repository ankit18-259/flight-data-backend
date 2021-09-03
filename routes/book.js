var express = require('express');
var router = express.Router();
const connection = require('../connection')
const cors = require('cors');
express().use(cors());

router.post('/book', (req, res) => {
	sql = "INSERT INTO" + req.body.username + "(name, age, dob, contact, email, flightno, source, destination, date, flightcompany) VALUES('"+ req.body.name + "', '" + req.body.age + "', '" + req.body.dob + "', '" + req.body.contact + "', '" + req.body.email + "', '" + req.body.flightno + "', '" + req.body.source + "', '" + req.body.destination + "', '" + req.body.date + "', '" + req.body.flightcompany + "');"
	connection.query(sql)
})

router.get('/gethistory', (req, res) => {
	sql = "SELECT * FROM" + req.query.username + ";"
	connection.query(sql, (err, rows, fields) => {
			if(!err)
			{
				res.send(rows)
			}
			else
			{
				console.log(err)
			}
		})
})

module.exports=router;