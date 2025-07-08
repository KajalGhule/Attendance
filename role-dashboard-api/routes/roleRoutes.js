const express = require('express');
const router = express.Router();
const { getRoleDashboard } = require('../controllers/roleController');

// GET /api/roles/:role
router.get('/:role', getRoleDashboard);

module.exports = router;
