import mongoose, { Schema } from "mongoose";

const FeaturesSchema = new Schema({
  title: String,
  info: String,
  icon: String,
});

export default mongoose.models.Features || mongoose.model("Features", FeaturesSchema);

