const Task = require("../models/taskModel");

exports.create = (req, res) => {
  Task.createTask(req.body.title, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Task Created");
  });
};

exports.getAll = (req, res) => {
  Task.getTasks((err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};