const router = require('express').Router();

// GET /api/socket

router.get('/', async (req, res, next) => {
	try {
		res.send(`<h1> Hello World </h1>`);
	} catch (e) {
		next(e);
	}
});

module.exports = router;
