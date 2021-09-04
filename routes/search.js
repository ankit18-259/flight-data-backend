const express = require('express');
const Router = express.Router();
const connection = require('../connection')
const cors = require('cors');
express().use(cors());

Router.get('/', (req, res) => {
	var sql = "SELECT * FROM flightItenerary WHERE source='"+ req.query.source + "' AND destination='"+ req.query.destination +"' AND date='" + req.query.date +"';"
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

module.exports = Router;