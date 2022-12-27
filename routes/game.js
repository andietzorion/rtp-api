const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/', controller.game.getAll);
router.get('/search', controller.game.getSearch);
router.get('/advantplay/games', controller.game.getAll);
router.get('/game/detail/:id', controller.game.getOne);
router.post('/game/add', controller.game.post);
router.put('/game/update/:id', controller.game.put);
router.delete('/game/delete/:id', controller.game.delete);

module.exports = router;