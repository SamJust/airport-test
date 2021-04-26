const MainController = require('./controllers/MainController');
const http = require('http'); // JS DOC typing only
const express = require('express');

class HttpInterface {
	constructor () {
		/**
		 * @type {express.Application}
		 */
		this.app;
		/**
		 * @type {http.Server}
		 */
		this.server;
		this.controllerList = [MainController];
	}

	async init () {
		this.app = express();
		this.app.use(express.json());
		const mainController = new MainController();
		this.app.post('/weather', mainController.createWeather);
	}

	async start () {
		return new Promise((res, rej) => {
			const PORT = process.env.PORT || 3000;
			this.server = this.app.listen(PORT, (err) => {
				if (err) {
					return rej(err);
				}
				console.log(`Listening to the port ${PORT}`);
				return res();
			});
		});
	}

	async stop () {
		return new Promise((res, rej) => {
			this.server.close((err) => {
				if (err) {
					return rej(err);
				}

				return res();
			});
		});
	}
}

module.exports = new HttpInterface();