const { Router } = require("express");
const router = Router();

const { user, middleware } = require("../controllers")();

// ---------------------------------------------------------
// Rotas não autenticadas
// ---------------------------------------------------------
router.route('/').post(user.post);
router.route('/authenticate').post(user.authenticate);

// ---------------------------------------------------------
// Middleware
// ---------------------------------------------------------
router.use(middleware.validateToken);

// ---------------------------------------------------------
// Rotas autenticadas
// ---------------------------------------------------------
router.route('/:id?').get(user.get).patch(user.patch);

module.exports = router;
