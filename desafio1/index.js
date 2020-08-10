const express = require("express");

const server = express();
server.use(express.json());

let projects = [];
let counter = 0;

function countTime(req, res, next) {
  console.time("count");
  console.log(++counter);
  next();
  console.timeEnd("count");
}

server.use(countTime);

function checkIdExists(req, res, next) {
  let checkExist = projects.find(p => p.id == req.body.id);
  if (checkExist) {
    res.status(400).json({ msg: "Id already exists" });
  }
  next();
}

function checkIdNotExists(req, res, next) {
  let checkExist = projects.find(p => p.id == req.params.id);
  if (!checkExist) {
    res.status(400).json({ msg: "No project founded" });
  }
  next();
}

server.post("/projects", checkIdExists, (req, res) => {
  const { id, title } = req.body;

  projects.push({ id: id, title: title, tasks: [] });

  return res.json(projects);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", checkIdExists, (req, res) => {
  const { id } = req.params;
  projects.map(p => {
    if (p.id == parseInt(id)) {
      p.title = req.body.title;
    }
    return p;
  });
  return res.json(projects);
});

server.delete("/projects/:id", checkIdExists, (req, res) => {
  projects = projects.filter(p => p.id != req.params.id);
  return res.send().status(200);
});

server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  projects = projects.map(p => {
    if (p.id == id) {
      p.tasks.push(title);
    }
    return p;
  });
  return res.json(projects);
});

server.listen(3000);
