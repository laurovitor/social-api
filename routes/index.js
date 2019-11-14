const { Router } = require('express');
const userRoute = require("./user");
const { getIndex, user } = require("../controllers")();
const router = Router();

// ---------------------------------------------------------
// Rotas Independentes
// ---------------------------------------------------------
router.use('/user', userRoute);

// ---------------------------------------------------------
// Rotas não autenticadas
// ---------------------------------------------------------
router.route('/').get(getIndex);

// ---------------------------------------------------------
// Middleware
// ---------------------------------------------------------

// ---------------------------------------------------------
// Rotas autenticadas
// ---------------------------------------------------------

module.exports = router;