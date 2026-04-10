const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { username } = req.body;

  const token = jwt.sign({ username }, "secret", { expiresIn: "1h" });

  res.json({ token });
};