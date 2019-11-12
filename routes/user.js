const { Router } = require("express");
const router = Router();

const { user, middleware } = require("../controllers")();

// ---------------------------------------------------------
// Rotas Independentes
// ---------------------------------------------------------

// ---------------------------------------------------------
// Rotas não autenticadas
// ---------------------------------------------------------
router.route('/authenticate').post(user.authenticate);

router.route('/').post(user.post);

// ---------------------------------------------------------
// Middleware
// ---------------------------------------------------------
router.use(middleware.validateToken);

// ---------------------------------------------------------
// Rotas autenticadas
// ---------------------------------------------------------
router.route('/').get(user.get).patch(user.patch);

module.exports = router;
