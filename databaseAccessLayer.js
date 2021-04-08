const database = include('/databaseConnection');


function grabRestaurants(callback) {
	let sqlQuery = "SELECT restaurant_id, name, description FROM restaurant";
	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}

function addRestaurant(postData, callback) {
	let sqlInsert = `INSERT INTO restaurant (name, description)
						 VALUES (:restaurant_name, :description);`;
	let params = {
		restaurant_name: postData.restaurant_name,
		description: postData.description,
	};
	console.log(sqlInsert);
	database.query(sqlInsert, params, (err, results, fields) => {
		if (err) {
			console.log(err);
			callback(err, null); 
		}
		else {
			console.log(results);
			callback(null, results);
		}
	});
}
function deleteRestaurant(restaurantId, callback) {
	let sqlDeleteRestaurant = "DELETE FROM restaurant WHERE restaurant_id = :restID";
	let params = {
		restID: restaurantId
	};
	console.log(sqlDeleteRestaurant);
	database.query(sqlDeleteRestaurant, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}
	});
}
	


module.exports = {grabRestaurants, addRestaurant, deleteRestaurant}
