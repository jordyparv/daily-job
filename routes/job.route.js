const express = require('express');
const router = express.Router();
const { createJob } = require('../controllers/job.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create', authMiddleware, createJob);

module.exports = router;