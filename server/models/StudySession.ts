import mongoose from 'mongoose';

const studySessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  learningPath: { type: mongoose.Schema.Types.ObjectId, ref: 'LearningPath' },
  durationMinutes: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('StudySession', studySessionSchema);