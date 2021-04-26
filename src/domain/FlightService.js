const Db = require('../infra/sequelize');
const { Op } = require('sequelize');
const uuid = require('uuid');
const EventEmitter = require('../app/EventEmmitter');

class WeatherService {
	constructor () {
		EventEmitter.eventEmitter.on('weatherReportRecieved', this.weatherReportRecieved);
	}

	async weatherReportRecieved (report) {
		if (report.windSpeed > 20) {
			Db.sequelize.models.flights.update({
				status: 'CANCELED',
			}, {
				where: {
					airportId: report.airportId,
					[Op.or]: [
						{
							status: 'NEW',
						},
						{
							status: 'DEPATURE'
						},
					],
				},
			});
		}
	}
}

module.exports = new WeatherService();