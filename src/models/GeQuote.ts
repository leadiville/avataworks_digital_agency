import mongoose, { Schema } from "mongoose";

const GetQuoteSchema = new Schema({
  name: String,
  companyName: String,
  email: String,
  phone: String,
  message: String,
});

export default mongoose.models.GeQuote ||
  mongoose.model("GetQuote", GetQuoteSchema);
