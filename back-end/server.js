const express = require("express");
const app = express();
const projectRouter = require("./routes/projectsRoutes");
const port = process.env.SERVER_PORT || 5000;
const cors = require("cors");
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use("/api/projects", projectRouter);

app.listen(port, () => console.log(`Server runs on ${port}...`));
