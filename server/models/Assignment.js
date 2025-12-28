const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  question: { type: String, required: true },
  sampleTables: { type: Array, default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Assignment', AssignmentSchema);
