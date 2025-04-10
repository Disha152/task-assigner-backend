const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  budget: Number,
  skills: [String],
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: {
    type: String,
    enum: ['open', 'assigned', 'completed', 'rejected'], // added 'rejected'
    default: 'open'
  },
  submission: String
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);



