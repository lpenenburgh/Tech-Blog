const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
//dashboard route?


//added
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;
