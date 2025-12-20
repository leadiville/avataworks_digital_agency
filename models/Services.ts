import mongoose, { Schema } from "mongoose";

const ServicesSchema = new Schema({
  title: String,
  info: String,
  imgSrc: String,
  showInfo: Boolean,
  icon: String,
  fullInfo: String,
  subServices: [String],
});

export default mongoose.model("Services", ServicesSchema);
