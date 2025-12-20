import mongoose, { Schema } from "mongoose";

const WhyChooseUsSchema = new Schema({
  title: String,
  content: String,
  icon: String,
});

export default mongoose.model("WhyChooseUs", WhyChooseUsSchema);
