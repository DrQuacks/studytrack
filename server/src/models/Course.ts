import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String 
});

export default mongoose.model('Course', courseSchema);