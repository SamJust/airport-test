const Db = require('../infra/sequelize');
const uuid = require('uuid');
const EventEmitter = require('../app/EventEmmitter');

class WeatherService {
	constructor () {
		EventEmitter.eventEmitter.on('weatherReportRecieved', this.weatherReportRecieved);
	}

	async weatherReportRecieved (report) {
		console.log('HERE');
		if (report.windSpeed > 20) {
			Db.sequelize.models.flights.update({
				status: 'CANCELED',
			}, {
				where: {
					airportId: report.airportId,
				},
			});
		}
	}
}

module.exports = new WeatherService();