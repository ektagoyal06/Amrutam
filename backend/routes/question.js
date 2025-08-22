import express from "express";
import multer from "multer";
import Question from "../models/question.js";

const router = express.Router();

// Multer storage for attachments
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

router.post("/", upload.array("attachments"), async (req, res) => {
  try {
    const { userId, username, question, description } = req.body;
    const attachments = req.files.map((file) => file.filename);

    const newQuestion = new Question({
      userId,
      username,
      question,
      description,
      attachments
    });

    await newQuestion.save();
    res.status(201).json({ success: true, data: newQuestion });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
