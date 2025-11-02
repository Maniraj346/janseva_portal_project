// const express = require('express');
// const router = express.Router();
// const { submitIssue } = require('../controllers/issueController');
// const upload = require('../middleware/upload');

// router.post('/submit', upload.single('file'), submitIssue);

// module.exports = router;
const express = require('express');
const router = express.Router();
const { submitIssue } = require('../controllers/issueController');
const upload = require('../middleware/upload');
const Issue = require('../models/Issue');

// Submit issue with file
router.post('/submit', upload.single('file'), submitIssue);

// View all issues (for officers/admins)
router.get('/all', async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching issues' });
  }
});

module.exports = router;