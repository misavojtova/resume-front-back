const connection = require("../db-config");

const getAllProjects = async (req, res) => {
  try {
    const [projects] = await connection.query("Select * from projects");

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllProjects,
};
