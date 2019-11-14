const user = require("./user")();
const api = require("./api")();
const middleware = require("./middleware")();

const controller = () => {
	return {
		api: api,
		middleware: middleware,
		user: user
	};
};

module.exports = controller;