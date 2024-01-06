import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Course Title"],
    minLenght: [4, "Course Title Must Be Atleast 4 Characters"],
    maxLength: [80, "Course Title Must Not Exceed 80 Characters"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Course Description"],
    minLenght: [20, "Course Description Must Be Atleast 20 Characters"],
  },
  lectures: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
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

  views: {
    type: Number,
    default: 0,
  },
  numOfVideos: {
    type: Number,
    default: 0,
  },

  category: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: [true, "Enter Course Creator Name"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const CourseModel = mongoose.model("CourseModel", schema);
