import express from "express";
import { getCourses, postCourses } from "../controllers/courseController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import multer from "multer";
import { fileFilter, fileStorageCourse } from "../utils/multer.js";

const courseRoutes = express.Router();

const upload = multer({
  storage: fileStorageCourse,
  fileFilter,
});

courseRoutes.get("/courses", verifyToken, getCourses);
courseRoutes.post(
  "/courses",
  verifyToken,
  upload.single("thumbnail"),
  postCourses
);

export default courseRoutes;
