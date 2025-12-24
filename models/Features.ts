import mongoose, { Schema } from "mongoose";

const FeaturesSchema = new Schema({
  title: String,
  info: String,
  icon: String,
});
const Features =
  mongoose.models.Features || mongoose.model("Feautures", FeaturesSchema);
export default Features;
