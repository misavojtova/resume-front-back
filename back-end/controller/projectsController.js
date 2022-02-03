const connection = require("../db-config");

const getAllProjects = async (req, res) => {
  try {
    const [projects] = await connection.query("Select * from projects");

    if (projects.length) res.status(200).json(projects);
    else res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllProjectsDesc = async (req, res) => {
  try {
    const [projects] = await connection.query(
      "select * from projects order by date desc;"
    );
    if (projects.length) res.status(200).json(projects);
    else res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getAllProjectsAsc = async (req, res) => {
  try {
    const [projects] = await connection.query(
      "select * from projects order by date asc;"
    );
    if (projects.length) res.status(200).json(projects);
    else res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getProject = async (req, res) => {
  try {
    const [project] = await connection.query(
      "Select * from projects where id = (?)",
      [req.params.id]
    );
    if (project.length) res.status(200).json(project);
    else res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addProject = async (req, res) => {
  try {
    const { image, description, liveDemo, githubRepo } = req.body;
    var date = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    const project = await connection.query(
      "Insert into projects (image, description, liveDemo, githubRepo, date) values (?, ?, ?, ?, ?)",
      [image, description, liveDemo, githubRepo, date]
    );

    res.status(200).send(`Project was succesfully added!`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await connection.query(
      "DELETE FROM projects WHERE id = (?)",
      [req.params.id]
    );
    console.log(project);
    res.status(200).send("Project was deleted succesfully");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = {
  getAllProjects,
  addProject,
  deleteProject,
  getProject,
  getAllProjectsDesc,
  getAllProjectsAsc,
};
