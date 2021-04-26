const { Sequelize, DataTypes } = require('sequelize');

/**
 * 
 * @param {Sequelize} sequelize 
 * @returns schema
 */
module.exports = async (sequelize) => {
	const model = sequelize.define('flights', {
		// Model attributes are defined here
		id: {
		  type: DataTypes.UUID,
		  primaryKey: true,
		},
		airportId: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		code: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM('NEW', 'DEPATURE', 'FLIGHT', 'CANCELED', 'PENDING'),
			defaultValue: 'NEW',
		},
	  }, {
		tableName: 'flights',
	});

	await model.sync({
		force: true,
	});

	return model;
}