import express from "express";
import {
  login,
  logout,
  register,
  getMyProfile,
  changePassword,
  updateProfile,
  getAllUsers,
  updateUserRole,
  deleteUser,
  forgetPassword,
  resetPassword,
  verify,
} from "../Controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

// register
router.route("/register").post(register);

// verify
router.route("/verify").post(isAuthenticated, verify);

// login
router.route("/login").post(login);

//logout
router.route("/logout").get(logout);

// my profile
router.route("/me").get(isAuthenticated, getMyProfile);

// change password
router.route("/changepassword").put(isAuthenticated, changePassword);

// update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

// get all users --Admin
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);

// update role --Admin
router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);

// forget password
router.route("/forgetpassword").post(forgetPassword);

// resetPassword
router.route("/resetpassword/:token").put(resetPassword);

export default router;
