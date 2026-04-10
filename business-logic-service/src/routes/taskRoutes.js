const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// POST /tasks
router.post("/", taskController.create);

// GET /tasks
router.get("/", taskController.getAll);

module.exports = router;