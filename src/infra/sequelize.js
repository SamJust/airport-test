const { Sequelize } = require('sequelize');
const WeatherEntry = require('./models/WeatherModel');
const Flights = require('./models/Flights');

class Db {
	constructor () {
		this.sequelize;
		this.models = {
			WeatherReport: WeatherEntry,
			Flights: Flights,
		};
	}

	async init () {
		this.sequelize = new Sequelize({
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			database: process.env.DB_DATABASE,
			dialect: 'postgres',
		});
		await this.sequelize.authenticate();
	};

	async start () {
		for (const model in this.models) {
			if (Object.hasOwnProperty.call(this.models, model)) {
				const element = this.models[model];
				await element(this.sequelize);
			}
		}
		
	}

	async stop () {
		this.sequelize.close();
	}
}

module.exports = new Db();