const epxress = require('express');
const router = epxress.Router();

const testActions = require('../actions/api/test');

router.get('/', testActions.homepage);

module.exports = router;