const express = require("express");
const projectRouter = express.Router();
const {
  getAllProjects,
  addProject,
  deleteProject,
} = require("../controller/projectsCon");

projectRouter.route("/").get(getAllProjects).post(addProject);
projectRouter.route("/:id").delete(deleteProject);

module.exports = projectRouter;
