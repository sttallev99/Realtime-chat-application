const router = require('express').Router();

const { createChat, findChat, findUserChats } = require('../Controllers/chatController');

router.post('/', createChat);
router.get('/:userId', findUserChats);
router.get('/find/:firstId/:secondId', findChat);

module.exports = router;