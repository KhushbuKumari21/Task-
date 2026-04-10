const registry = require("../services/routeRegistryService");

exports.register = (req, res) => {
  registry.register(req.body);
  res.send("Routes Registered");
};