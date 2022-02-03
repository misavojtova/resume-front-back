const express = require("express");
const projectRouter = express.Router();
const {
  getAllProjects,
  addProject,
  deleteProject,
  getProject,
  getAllProjectsDesc,
  getAllProjectsAsc,
  UpdateProject,
} = require("../controller/projectsController");

projectRouter.route("/desc").get(getAllProjectsDesc);
projectRouter.route("/asc").get(getAllProjectsAsc);

projectRouter.route("/").get(getAllProjects).post(addProject);
projectRouter
  .route("/:id")
  .delete(deleteProject)
  .get(getProject)
  .patch(UpdateProject);

module.exports = projectRouter;
