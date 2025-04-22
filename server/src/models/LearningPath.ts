import mongoose from 'mongoose';

const learningPathSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('LearningPath', learningPathSchema);