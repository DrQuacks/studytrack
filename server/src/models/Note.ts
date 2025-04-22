import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  resource: { type: mongoose.Schema.Types.ObjectId, ref: 'Resource' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Note', noteSchema);