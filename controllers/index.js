const user = require("./user")();
const middleware = require("./middleware")();

const controller = () => {
    const getIndex = (req, res, next) => {
        res.render('index');
    };

    return {
        getIndex: getIndex,
        middleware: middleware,
        user: user
    };
};

module.exports = controller;