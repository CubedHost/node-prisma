const agent = require('./util/agent');
const prefix = require('./util/prefix');

/**
 * Tickets : All
 *
 * @returns {Promise}
 */
exports.all = function() {
	return agent.get('/api/tickets/all')
		.use(prefix);
};

/**
 * Tickets : Get Ticket
 *
 * @param   {Number} ticketId Ticket to get
 * @returns {Promise}
 */
exports.get = function(ticketId) {
	return agent.get(`/api/tickets/${ticketId}`)
		.use(prefix);
};

/**
 * Tickets : Reply
 *
 * @param   {Number} ticketId Ticket id
 * @param   {String} message  Ticket message
 * @returns {Promise}
 */
exports.reply = function(ticketId, message) {
	return agent.post(`/api/tickets/reply/${ticketId}`)
		.send({ message })
		.use(prefix);
};

/**
 * Tickets : Create
 *
 * @param   {Object} ticket Ticket data
 * @returns {Promise}
 */
exports.create = function(ticket) {
	return agent.post(`/api/tickets/create`)
		.send(ticket)
		.use(prefix);
};

/**
 * Tickets : Get Departments
 *
 * @returns {Promise}
 */
exports.getDepartments = function() {
	return agent.get(`/api/tickets/departments`)
		.use(prefix);
};
