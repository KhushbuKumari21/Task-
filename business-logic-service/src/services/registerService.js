const axios = require("axios");

exports.registerRoutes = async () => {
  await axios.post("http://localhost:5000/register", {
    serviceName: "business-service",
    routes: ["/tasks", "/tasks/:id"]
  });
};