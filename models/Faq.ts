
import mongoose, { Schema } from "mongoose";

const FaqSchema = new Schema({
  showAnswer: Boolean,
  question: String,
  answer: Schema.Types.Mixed,
});

const FaqsSchema = new Schema({
  homePage: [FaqSchema],
  servicePage: [FaqSchema],
});

export default mongoose.model("Faq", FaqsSchema);
