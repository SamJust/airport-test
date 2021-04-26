
const { Sequelize, DataTypes } = require('sequelize');

/**
 * 
 * @param {Sequelize} sequelize 
 * @returns schema
 */
module.exports = async (sequelize) => {
	const model = sequelize.define('weatherReports', {
		// Model attributes are defined here
		id: {
		  type: DataTypes.UUID,
		  primaryKey: true,
		},
		airportId: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		windSpeed: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	  }, {
		tableName: 'weatherReports',
	});

	await model.sync({
		force: true,
	});

	return model;
}