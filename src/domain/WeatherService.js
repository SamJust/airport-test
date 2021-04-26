const Db = require('../infra/sequelize');
const uuid = require('uuid');
const EventEmitter = require('../app/EventEmmitter');

class WeatherService {
	async createWeatherReport (airportId, windSpeed) {
		const report = new Db.sequelize.models.weatherReports({
			id: uuid.v4(),
			airportId: airportId,
			windSpeed: windSpeed,
		});

		await report.save();

		EventEmitter.eventEmitter.emit('weatherReportRecieved', report);

		return report;
	}
}

module.exports = new WeatherService();