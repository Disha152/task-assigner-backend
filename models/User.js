
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['creator', 'user', 'admin'], default: 'user' },
  skills: [String],      
  interests: [String], 
  // Add to your User schema
savedTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }]
  
});

module.exports = mongoose.model('User', userSchema);
