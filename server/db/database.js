const Sequelize = require('sequelize');
const name_of_database = 'socket_io';
const db = new Sequelize(
	process.env.DATABASE_URL || `postgres://localhost:5432/${name_of_database}`,
	{
		logging: false,
	}
);

module.exports = db;
