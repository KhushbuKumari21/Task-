const express = require("express");
const app = express();
const { registerRoutes } = require("./services/registerService");

app.use(express.json());

app.use("/login", require("./routes/authRoutes"));
app.use("/tasks", require("./routes/taskRoutes"));

app.listen(4000, async () => {
  console.log("Business Service running on 4000");
  await registerRoutes();
});