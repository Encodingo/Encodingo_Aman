import express from "express";
import { isAuthenticated, authorizeAdmin } from "../middlewares/auth.js";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getAllCoursesAdmin,
  getTopRatedCourses,
} from "../Controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
const router = express.Router();

// get all courses
router.route("/courses").get(getAllCourses);

// get all courses
router.route("/gettopcourses").get(getTopRatedCourses);

router
  .route("/admin/courses")
  .get(isAuthenticated, authorizeAdmin, getAllCoursesAdmin);

// Create a new Course
router
  .route("/createcourse")
  .post(isAuthenticated, authorizeAdmin,singleUpload, createCourse);

router
  .route("/course/:id")
  .delete(isAuthenticated, authorizeAdmin, deleteCourse);

export default router;
