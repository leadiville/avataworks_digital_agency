import mongoose, { Schema } from "mongoose";

export const FooterAddressSchema = new Schema({
  title: String,
  subtitle: String,
  icon: String,
});
export const SocialLinkSchema = new Schema({
  instagram: String,
  facebook: String,
  linkedIn: String,
  x: String,
  tiktok: String,
});

const FooterSchema = new Schema({
  footerAddress: [FooterAddressSchema],
  usefulLinks: [String],
  socialLinks: SocialLinkSchema,
});

export default mongoose.models.Footer || mongoose.model("Footer", FooterSchema);
