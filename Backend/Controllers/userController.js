import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../Models/userModel.js";
import { sendToken } from "../utils/sendToken.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";
// Register User
export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, phone, password, address, grade } = req.body;
  if (!name || !email || !password || !phone)
    return next(new ErrorHandler("Please enter all field", 400));

  let user = await User.findOne({ email });

  if (user) return next(new ErrorHandler("User Already Exist", 409));

  const otp = Math.floor(Math.random() * 1000000);

  user = await User.create({
    name,
    email,
    phone,
    password,
    address,
    grade,
    otp,
    otp_expiry: new Date(Date.now() + process.env.OTP_EXPIRE * 60 * 1000),
  });

  // send otp on  email for verification

  const message = `Verify Your Account Your OTP is ${otp}`;

  // Send token via email

  try {
    await sendEmail({
      email: user.email,
      subject: `Encodingo Verification Email`,
      message,
    });

    sendToken(res, user, `OTP sent to ${user.email} successfully, Valid for 5 minutes.`, 201);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

export const verify = async (req, res) => {
  try {
    const otp = Number(req.body.otp);
    // console.log(otp);
    const user = await User.findById(req.user._id);
    
    if (user.otp !== otp || user.otp_expiry < Date.now()) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid OTP or has been Expired" });
    }

    user.verified = true;
    user.otp = null;
    user.otp_expiry = null;

    await user.save();

    sendToken(res, user, `Successfully Verified , Welcome ${user.name}`, 200);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Login User
export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please enter all field", 400));

  const user = await User.findOne({ email }).select("+password");

  if (!user) return next(new ErrorHandler("Incorrect Email or Password", 401));

  const isMatch = await user.comparePassword(password);

  if (!isMatch)
    return next(new ErrorHandler("Incorrect Email or Password", 401));

  sendToken(res, user, `Welcome back, ${user.name}`, 200);
});

// Logout User
export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      //  secure: true,
      // sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged Out Successfully ",
    });
});

// get user profile
export const getMyProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

// change password
export const changePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    return next(new ErrorHandler("Please enter all field", 400));

  const user = await User.findById(req.user._id).select("+password");

  const isMatch = await user.comparePassword(oldPassword);

  if (!isMatch) return next(new ErrorHandler("Incorrect Old Password", 400));

  user.password = newPassword;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
  });
});

export const updateProfile = catchAsyncError(async (req, res, next) => {
  const { name, email, phone, address, grade } = req.body;

  const user = await User.findById(req.user._id);

  if (name) user.name = name;
  if (email) user.email = email;
  if (phone) user.phone = phone;
  if (address) user.address = address;
  if (grade) user.grade = grade;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully",
  });
});

export const getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    users,
  });
});

export const updateUserRole = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) return next(new ErrorHandler("User not found", 404));

  if (user.role === "user") user.role = "admin";
  else user.role = "user";

  await user.save();

  res.status(200).json({
    success: true,
    message: "Role Updated",
  });
});

export const deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) return next(new ErrorHandler("User not found", 404));

  // Cancel Subscription

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});

export const forgetPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) return next(new ErrorHandler("User not found", 400));

  const resetToken = await user.getResetToken();

  await user.save();

  // const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  // const message = `Click on the link to reset your password. ${url}. If you have not request then please ignore.`;

  const resetPasswordUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  // const resetPasswordUrl = `${req.protocol}://${req.get(
  //   "host"
  // )}/resetpassword/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  // Send token via email

  try {
    await sendEmail({
      email: user.email,
      subject: `Encodingo Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }

  // await sendEmail(user.email, "CourseBundler Reset Password", message);

  // res.status(200).json({
  //   success: true,
  //   message: `Reset Token has been sent to ${user.email}`,
  // });
});

export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { token } = req.params;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });

  if (!user)
    return next(new ErrorHandler("Token is invalid or has been expired", 401));

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
  });
});
