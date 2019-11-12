const { Router } = require('express');
const userRoute = require("./user");

const controller = require("../controllers")();

const router = Router();

// ---------------------------------------------------------
// Rotas Independentes
// ---------------------------------------------------------
router.use('/user', userRoute);

// ---------------------------------------------------------
// Rotas não autenticadas
// ---------------------------------------------------------
router.route('/').get(controller.getIndex);

// ---------------------------------------------------------
// Middleware
// ---------------------------------------------------------
router.use(controller.middleware.validateToken);

// ---------------------------------------------------------
// Rotas autenticadas
// ---------------------------------------------------------

module.exports = router;
