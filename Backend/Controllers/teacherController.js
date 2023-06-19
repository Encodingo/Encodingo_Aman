import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Teacher } from "../Models/teacherModal.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary"
// get top 3 rated teachers
export const getTopRatedTeachers = catchAsyncError(async (req, res, next) => {
  const teachers = await Teacher.find().sort({ rating: -1 }).limit(4);

  res.status(200).json({
    success: true,
    teachers,
  });
});

// get all teacher anyone
export const getAllTeachers = catchAsyncError(async (req, res, next) => {
  const keyword = req.query.keyword || "";
  const category = req.query.category || "";

  const teachers = await Teacher.find({
    name: {
      $regex: keyword,
      $options: "i",
    },
    category: {
      $regex: category,
      $options: "i",
    },
  });
  res.status(200).json({
    success: true,
    teachers,
  });
});

// get all teacher administration
export const getAllTeachersAdmin = catchAsyncError(async (req, res, next) => {
  const teachers = await Teacher.find();

  res.status(200).json({
    success: true,
    teachers,
  });
});

// create a new Teacher only admin
export const createTeacher = catchAsyncError(async (req, res, next) => {
  const { name, bio, link, session, rating, nos , category, level } = req.body;

  if (!name || !bio || !link || !session || !rating || !nos || !category || !level) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  // for poster upload we use multer
  const file = req.file;

  const fileUri = getDataUri(file);

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content,{
    folder: "teachers",
  });

  await Teacher.create({
    name,
    bio,
    link,
    session,
    rating,
    nos,
    category,
    level,
    poster: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });

  res.status(201).json({
    success: true,
    message: "Teacher created successfully",
  });
});

// delete the teacher
export const deleteTeacher = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const teacher = await Teacher.findById(id);

  if (!teacher) return next(new ErrorHandler("Teacher not found", 404));

  // first distroy poster of course
  await cloudinary.v2.uploader.destroy(teacher.poster.public_id);

  // loop entire lectures array to distroy one by one lec
  // for (let i = 0; i < course.lectures.length; i++) {
  //   const singleLecture = course.lectures[i];
  //   await cloudinary.v2.uploader.destroy(singleLecture.video.public_id, {
  //     resource_type: "video",
  //   });
  // }

  // finally remove course
  await teacher.remove();

  res.status(200).json({
    success: true,
    message:
      "Teacher Deleted Successfully Please Refresh the site if changes not appear",
  });
});
