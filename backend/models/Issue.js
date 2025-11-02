const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  category: String,
  description: String,
  location: String,
  fileUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Issue', issueSchema);