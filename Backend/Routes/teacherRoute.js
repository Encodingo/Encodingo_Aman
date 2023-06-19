import express from "express";
import { isAuthenticated, authorizeAdmin } from "../middlewares/auth.js";

import { createTeacher, deleteTeacher, getAllTeachers, getAllTeachersAdmin, getTopRatedTeachers } from "../Controllers/teacherController.js";
import singleUpload from "../middlewares/multer.js";
const router = express.Router();


router.route("/teachers").get(getAllTeachers);


router.route("/gettopteachers").get(getTopRatedTeachers);

router
  .route("/admin/teachers")
  .get(isAuthenticated, authorizeAdmin, getAllTeachersAdmin);


router
  .route("/createteacher")
  .post(isAuthenticated, authorizeAdmin,singleUpload, createTeacher);

router
  .route("/teacher/:id")
  .delete(isAuthenticated, authorizeAdmin, deleteTeacher);

export default router;
