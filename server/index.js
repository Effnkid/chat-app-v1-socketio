const port = process.env.PORT || 3000;
const { app, server } = require('./app');

const db = require('./db');

const init = async () => {
	await db.syncAndSeed();
	server.listen(port, () =>
		console.log(`Running on http://localhost:${port}/`)
	);
};

init();
