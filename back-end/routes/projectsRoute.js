const express = require("express");
const projectRouter = express.Router();
const { getAllProjects } = require("../controller/projectsCon");

projectRouter.route("/").get(getAllProjects);

module.exports = projectRouter;
