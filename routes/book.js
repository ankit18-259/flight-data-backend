const express = require('express');
const Router = express.Router();
const connection = require('../connection')
const cors = require('cors');
express().use(cors());

Router.post('/book', (req, res) => {
	sql = "INSERT INTO " + req.body.body.username + " (name, age, dob, contact, email, flightno, source, destination, date, flightcompany) VALUES('"+ req.body.body.name + "', '" + req.body.body.age + "', '" + req.body.body.dob + "', '" + req.body.body.contact + "', '" + req.body.body.email + "', '" + req.body.body.flightno + "', '" + req.body.body.source + "', '" + req.body.body.destination + "', '" + req.body.body.date + "', '" + req.body.body.flightcompany + "');"
	connection.query(sql)
})

Router.get('/gethistory', (req, res) => {
	console.log(req.query)
	sql = "SELECT * FROM " + req.query.username + ";"
	console.log(sql)
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

module.exports=Router;