import express from "express";

import {
  becomeAInstructor,
  contact,
  courseRequest,
  getDashboardStats,
} from "../controllers/otherController.js";
import singleUpload from "../middleware/multer.js";
import { authorizeAdmin, isAuthenticated } from "../middleware/Auth.js";

const router = express.Router();

//
router.route("/contact").post(contact);

//
router.route("/courserequest").post(courseRequest);

router.route("/becomeainstructor").post(singleUpload,becomeAInstructor);

// get admin dashboard
router
  .route("/admin/stats")
  .get(isAuthenticated, authorizeAdmin, getDashboardStats);

export default router;
