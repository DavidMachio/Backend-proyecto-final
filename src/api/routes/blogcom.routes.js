const express = require("express");

const {
  createBlogcom,
  deleteBlogcom,
  getallBlogcom,
} = require("../controllers/blogcom.controller");

const { upload } = require("../../middlewares/files.middleware");

const BlogcomRouter = express.Router();

BlogcomRouter.get("/", getallBlogcom);
BlogcomRouter.post("/", upload.single("img"), createBlogcom);
BlogcomRouter.delete("/:id", deleteBlogcom);

module.exports = BlogcomRouter;
