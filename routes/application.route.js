const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/apply', authMiddleware, applicationController.applyForJob);
router.get('/', applicationController.getAllApplication);
module.exports = router;