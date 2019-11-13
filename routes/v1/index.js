const { Router } = require('express');
const { user, middleware } = require("../../controllers")();

const userRoute = require("./user");

const router = Router();

// ---------------------------------------------------------
// Rotas Independentes
// ---------------------------------------------------------
router.use('/user', userRoute);

// ---------------------------------------------------------
// Rotas não autenticadas
// ---------------------------------------------------------
router.route('/authenticate').post(user.authenticate);

// ---------------------------------------------------------
// Middleware
// ---------------------------------------------------------
router.use(middleware.validateToken);

// ---------------------------------------------------------
// Rotas autenticadas
// ---------------------------------------------------------

module.exports = router;
