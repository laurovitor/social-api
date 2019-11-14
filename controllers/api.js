const controller = () => {
	const get = (req, res, next) => {
		res.render('index');
	};

	return {
		get: get
	};
};

module.exports = controller;