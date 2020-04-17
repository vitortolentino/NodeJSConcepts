const express = require("express");
const cors = require("cors");
const RepositoryController = require("./Controllers/RepositoryController");
const LikeController = require("./Controllers/LikeController");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/repositories", RepositoryController.index);

app.post("/repositories", RepositoryController.create);

app.put("/repositories/:id", RepositoryController.update);

app.delete("/repositories/:id", RepositoryController.destroy);

app.post("/repositories/:id/like", LikeController.create);

module.exports = app;
