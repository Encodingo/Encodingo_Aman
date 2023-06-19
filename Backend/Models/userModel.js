import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const schema = mongoose.Schema({
  // Name type, required
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  // Email type, required, unique, validate
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: validator.isEmail,
  },

  phone: {
    type: Number,
    required: [true, "Please Enter Your Phone Number"],
  },

  // Address
  address: {
    type: String,
  },

  // grade
  grade: {
    type: String,
  },
  // Password type, required, minLength, select
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password Must be greater than 8 chars.."],
    select: false,
  },
  // User Courses
  myCourses:{
    type:[String],
    default:[],
  },
  // Role type default
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },

  // CreatedAt type, default
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // verification of email
  verified: {
    type: Boolean,
    default: false,
  },

  otp: Number,
  otp_expiry: Date,
  resetPasswordToken: String,
  resetPasswordExpire: String,
});

schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

schema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

schema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

schema.methods.getResetToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

schema.index({ otp_expiry: 1 }, { expireAfterSeconds: 0 });

export const User = mongoose.model("User", schema);
