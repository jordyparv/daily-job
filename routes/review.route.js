const express = require('express');
const router = express.Router();
const { addReview } = require('../controllers/review.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/add', authMiddleware, addReview);

module.exports = router;