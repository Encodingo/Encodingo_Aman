import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter teacher name"],
    trim: true,
  },
  bio: {
    type: String,
    required: [true, "Please enter About Teacher"],
  },
  link: {
    type: String,
    required: [true, "Please enter topmatelink"],
  },

  category:{
     type: String,
     required: [true, "Please enter Category"],
  },
  session: {
    type: Number,
    required: [true, "Please enter duration"],
  },
  rating: {
    type: Number,
    required: [true, "Please enter rating"],
  },
  level:{
    type: String,
    required: [true, "Please enter Level"],
  },
  nos: {
    type: Number,
    required: [true, "Please enter number of students"],
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Teacher = mongoose.model("Teacher", teacherSchema);
