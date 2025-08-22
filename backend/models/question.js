import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  username: String,
  question: { type: String, required: true },
  description: String,
  attachments: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Question", questionSchema);
