const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const term = process.argv[2];

if (!term) console.log("Please provide a location");
else {
	geocode(term, (error, { latitude, longitude, location } = {}) => {
		if (error) {
			return console.log(error);
		}

		forecast(latitude, longitude, (error, forecastData) => {
			if (error) {
				return console.log(error);
			}

			console.log(location);
			console.log(forecastData);
		});
	});
}
