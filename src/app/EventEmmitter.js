const eventEmitter = require('events');

class EventEmitter {
	constructor () {
		this.eventEmitter = new eventEmitter.EventEmitter();
	}

	async init () {}

	async start () {}

	async stop () {}
}

module.exports = new EventEmitter();