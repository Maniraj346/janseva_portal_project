// const Issue = require('../models/Issue');

// exports.submitIssue = async (req, res) => {
//   try {
//     const { category, description, location } = req.body;
//     const fileUrl = req.file ? `/uploads/${req.file.filename}` : '';

//     const issue = new Issue({ category, description, location, fileUrl });
//     await issue.save();

//     res.status(201).json({ message: 'Issue submitted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error submitting issue' });
//   }
// };
const Issue = require('../models/Issue');

exports.submitIssue = async (req, res) => {
  try {
    console.log('📥 Incoming issue:', req.body);
    console.log('📎 Uploaded file:', req.file);

    const { category, description, location } = req.body;

    // Validate required fields
    if (!category || !description || !location) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const fileUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const issue = new Issue({
      category,
      description,
      location,
      fileUrl,
    });

    await issue.save();
    res.status(201).json({ message: 'Issue submitted successfully' });
  } catch (err) {
    console.error('❌ Error submitting issue:', err);
    res.status(500).json({ message: 'Server error while submitting issue' });
  }
};