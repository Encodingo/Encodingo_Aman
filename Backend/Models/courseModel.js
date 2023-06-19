import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter course name"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Please enter category"],
  },
  level: {
    type: String,
    required: [true, "Please enter level"],
  },
  // Lectures title,description,videos { public_id,url }
  lectures: [
    {
      title: {
        type: String,
        required: [true, "Please Enter Title"],
      },
      description: {
        type: String,
        required: [true, "Please Enter Description"],
      },
      video: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    },
  ],

  numOfVideos: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    required: [true, "Please enter duration"],
  },
  rating: {
    type: Number,
    required: [true, "Please enter rating"],
  },
  users: {
    type: Number,
    required: [true, "Please enter users"],
  },
  price: {
    type: Number,
    required: [true, "Please enter price"],
  },
  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  details: {
    type: String,
    required: [true, "Please enter detail"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Course = mongoose.model("Course", courseSchema);
