const express = require('express');
const router = express.Router();
const { applyForJob } = require('../controllers/application.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/apply', authMiddleware, applyForJob);

module.exports = router;