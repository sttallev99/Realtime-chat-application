const router = require('express').Router();

const { createMessage, getMessage } = require('../Controllers/messageControler');

router.post('/', createMessage);
router.get('/:chatId', getMessage);

module.exports = router;