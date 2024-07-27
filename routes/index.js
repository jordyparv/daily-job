const express = require('express')
const router = express.Router()

const userRoutes = require('./user.route');
const jobRoutes = require('./job.route');
const applicationRoutes = require('./application.route');
const reviewRoutes = require('./review.route');

router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);
router.use('/applications', applicationRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router