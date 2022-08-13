const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send(`This is not the route you're looking for...`);
});

module.exports = router;