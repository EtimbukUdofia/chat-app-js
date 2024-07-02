import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required:true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: true,
    required: true,
    minlength: 6
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"]
  },
  profilePic: {
    type: String,
    default: ""
  },
});

const User = mongoose.model("User", userSchema);

export default User;