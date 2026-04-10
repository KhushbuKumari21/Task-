const express = require("express");
const app = express();

const authMiddleware = require("./middleware/authMiddleware");
const { forwardRequest } = require("./proxy/proxyHandler");
const { register } = require("./controllers/gatewayController");

app.use(express.json());

app.post("/register", register);

// protected routes
app.use(authMiddleware);

// FIXED ROUTE HANDLING
app.use((req, res, next) => {
  forwardRequest(req, res, next);
});

app.listen(5000, () => {
  console.log("Gateway running on 5000");
});