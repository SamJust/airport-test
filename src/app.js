const App = require('./app/App');

void async function main () {
	const app = new App();

	try {
		console.log('Initing application');
		await app.init();
		console.log('Starting application');
		await app.start();
	} catch (error) {
		console.log('Error in app startup');
		console.error(error);
		await app.stop();
	}
} ()