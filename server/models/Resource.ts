import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: String,
  type: String, // 'video', 'article', etc.
  status: { type: String, enum: ['not started', 'in progress', 'completed'], default: 'not started' },
  learningPath: { type: mongoose.Schema.Types.ObjectId, ref: 'LearningPath' },
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Resource', resourceSchema);