import mongoose, { Schema } from "mongoose";

const OurTeamSchema = new Schema({
  fullName: String,
  skillSet: String,
  image: String,
});

export default mongoose.model("OurTeam", OurTeamSchema);
