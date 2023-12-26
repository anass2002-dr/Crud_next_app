import mongoose from "mongoose";

const User = mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    age:Number
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", User);