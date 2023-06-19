import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Course } from "../Models/courseModel.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";
// get all courses anyone
export const getAllCourses = catchAsyncError(async (req, res, next) => {
  const keyword = req.query.keyword || "";
  const category = req.query.category || "";

  const courses = await Course.find({
    title: {
      $regex: keyword,
      $options: "i",
    },
    category: {
      $regex: category,
      $options: "i",
    },
  }).select("-lectures");
  res.status(200).json({
    success: true,
    courses,
  });
});

// get top 3 rated course
export const getTopRatedCourses = catchAsyncError(async (req, res, next) => {
  const topcourses = await Course.find()
    .sort({ rating: -1 })
    .limit(4)
    .select("-lectures");

  res.status(200).json({
    success: true,
    topcourses,
  });
});

// get all courses administration
export const getAllCoursesAdmin = catchAsyncError(async (req, res, next) => {
  const courses = await Course.find();

  res.status(200).json({
    success: true,
    courses,
  });
});

// create a new Course only admin
export const createCourse = catchAsyncError(async (req, res, next) => {
  const {
    title,
    category,
    level,
    duration,
    rating,
    users,
    price,
    details,
    numOfVideos,
  } = req.body;
  // console.log(title, category, level, duration, rating, users, price,numOfVideos);

  if (
    !title ||
    !category ||
    !level ||
    !duration ||
    !rating ||
    !users ||
    !price ||
    !details ||
    !numOfVideos
  ) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  //for poster upload we use multer
  const file = req.file;
  const fileUri = getDataUri(file);

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

  await Course.create({
    title,
    category,
    level,
    duration,
    rating,
    users,
    price,
    details,
    numOfVideos,
    poster: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });

  res.status(201).json({
    success: true,
    message: "Course created successfully, Now you can add lectures.",
  });
});

// delete the course
export const deleteCourse = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const course = await Course.findById(id);

  if (!course) return next(new ErrorHandler("Course not found", 404));

  // first distroy poster of course
  await cloudinary.v2.uploader.destroy(course.poster.public_id);

  // loop entire lectures array to distroy one by one lec
  // for (let i = 0; i < course.lectures.length; i++) {
  //   const singleLecture = course.lectures[i];
  //   await cloudinary.v2.uploader.destroy(singleLecture.video.public_id, {
  //     resource_type: "video",
  //   });
  // }

  // finally remove course
  await course.remove();

  res.status(200).json({
    success: true,
    message:
      "Course Deleted Successfully Please Refresh the site if changes not appear",
  });
});
