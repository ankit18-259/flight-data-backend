var sql = require('./config/db.js')

var operation = function(){
	this.operation = operation.operation
}

operation.getFlightData = new Promise(function getFlightData(resolve, reject) {
  var sql_statement = "SELECT * FROM flightItenerary WHERE source='"+ 'GAU' + "' AND destination='"+ 'DEL' +"' AND date='" + '15/10/2021' +"';"
  sql.query(sql_statement, (err, result) => {
  	if (err) throw err;
  	console.log(result)
  })

})


operation.bookTicket = function bookTicket(data) {
	var sql_statement = "INSERT INTO bookedHistory(name, age, dob, contact, email) VALUES('" + data.name + "', '" + data.age + "', '" + data.dob + "', '" + data.contact + "', '" + data.email + "');" 
    
	sql.query(sql_statement)
}

operation.bookedHistory = function bookedHistory() {
	sql.query(`SELECT name, age, dob, contact, email FROM bookedHistory`)
}

module.exports = operation;
