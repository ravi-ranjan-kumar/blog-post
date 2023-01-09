import mongoose from "mongoose";
import validator from "validator";
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Name required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password required"],
    minlength: 5,
    maxlength: 1024,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      isAsync: false,
    },
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
