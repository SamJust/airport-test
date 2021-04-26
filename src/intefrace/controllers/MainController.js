const WeatherService = require('../../domain/WeatherService');

module.exports = class MainController {
	async createWeather (req, res) {
		const result = await WeatherService.createWeatherReport(req.body.airportId, req.body.windSpeed);

		res.json({
			reportId: result.id,
		});
	}
}