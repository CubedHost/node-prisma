
/**
 * CubedHost Client
 *
 * @constructor
 * @param {Object} options Client options
 */
const CubedHost = {

	Authentication: require('./Authentication'),
	User: require('./User'),
	Servers: require('./Servers'),
	Tickets: require('./Tickets'),
	Billing: require('./Billing')

};


module.exports = CubedHost;
