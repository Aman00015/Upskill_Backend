import express from "express";
import {
  addLectures,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseController.js";
import singleUpload from "../middleware/multer.js";
import { authorizeAdmin, authorizeSubscribers, isAuthenticated } from "../middleware/Auth.js";

const router = express.Router();

//get all courses without lectures
router.route("/courses").get(getAllCourses);

//create new course - only admin
router
  .route("/createcourse")
  .post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

router
  .route("/course/:id")
  .get(isAuthenticated,authorizeSubscribers, getCourseLectures)
  .post(isAuthenticated, authorizeAdmin, singleUpload, addLectures)
  .delete(isAuthenticated,authorizeAdmin,deleteCourse)

  router.route("/lecture").delete(isAuthenticated,authorizeAdmin,deleteLecture );


export default router;
