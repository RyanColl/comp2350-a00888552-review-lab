const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b91e157ccf372a",
	password: "9f038b93",
	database: "heroku_725611166f782d7",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "lab_example",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_heroku == 1) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		