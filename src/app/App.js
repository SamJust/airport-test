const Db = require('../infra/sequelize');
const HttpInterface = require('../intefrace/HTTP');
const EventEmmitter = require('./EventEmmitter');

const WeatherService = require('../domain/WeatherService');
const FlightService = require('../domain/FlightService');

module.exports = class App {
	constructor () {
		/**
		 * @type {Array<any>}
		 */
		this.initList = [EventEmmitter, Db, HttpInterface];
	}

	async init () {
		for (const init of this.initList) {
			console.log(`Initnig ${init.constructor.name}`);
			await init.init();
			console.log(`Inited ${init.constructor.name}`);
		}
	}

	async start () {
		for (const init of this.initList) {
			console.log(`Starting ${init.constructor.name}`);
			await init.start();
			console.log(`Started ${init.constructor.name}`);
		}
	}

	async stop () {
		for (const init of this.initList) {
			console.log(`Stoping ${init.constructor.name}`);
			await init.stop();
			console.log(`Stopped ${init.constructor.name}`);
		}
	}
}