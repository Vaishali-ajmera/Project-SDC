const express = require('express');
const router = express.Router();
const { studentIntake, studentStrength } = require('../controllers/controller');

// POST endpoint to save student intake data to database
router.post('/student-intake', studentIntake );

router.post('/student-strength', studentStrength );
router.post('/phd-students-detail',  );

module.exports = router;
