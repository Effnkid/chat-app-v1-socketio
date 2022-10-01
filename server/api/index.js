const router = require('express').Router();

router.use('/socket', require('./socket.js'));

router.use((req, res, next) => {
	const err = new Error('API route not found!');
	err.status = 404;
	next(err);
});

module.exports = router;
