const express = require('express')
const router = express.Router()

const userRoutes = require('./user.route');
const jobRoutes = require('./job.route');
const applicationRoutes = require('./application.route');
const reviewRoutes = require('./review.route');

router.use('/users', userRoutes);
router.use('/job', jobRoutes);
router.use('/application', applicationRoutes);
router.use('/review', reviewRoutes);

module.exports = router