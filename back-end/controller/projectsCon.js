const connection = require("../db-config");

const getAllProjects = async (req, res) => {
  try {
    const [projects] = await connection.query("Select * from projects");

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addProject = async (req, res) => {
  try {
    const { image, description, liveDemo, githubRepo } = req.body;
    const project = await connection.query(
      "Insert into projects (image, description, liveDemo, githubRepo) values (?, ?, ?, ?)",
      [image, description, liveDemo, githubRepo]
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
};
