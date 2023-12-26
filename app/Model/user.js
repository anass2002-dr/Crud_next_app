import mongoose,{Schema} from "mongoose";

const userSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    age:Number
  },
  {
    timestamps: true,
  }
);
const User=mongoose.models.User || mongoose.model("User", userSchema);
export default User;