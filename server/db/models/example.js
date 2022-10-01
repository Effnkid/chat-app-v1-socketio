const Sequelize = require('sequelize');
const db = require('../database');

const Example = db.define('example', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notNull: true },
	},
});

module.exports = Example;
