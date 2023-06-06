const router = require('express').Router();
const userRoutes = require('./userroutes');
const storyRoutes = require('./storyroutes');

router.use('/users', userRoutes);
router.use('/story', storyRoutes);

module.exports = router;
