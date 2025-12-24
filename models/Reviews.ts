import mongoose, { Schema } from "mongoose";

const ReviewsSchema = new Schema({
  companyName: String,
  review: String,
  companyPosition: String,
  image: String,
  logo: String,
});

export default mongoose.models.Reviews ||
  mongoose.model("Review", ReviewsSchema);
