const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    console.log("AUTH HEADER:", authHeader); // debug

    if (!authHeader) {
      return res.status(401).send("No token provided");
    }

    // remove "Bearer "
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    console.log("TOKEN:", token); // debug

    const decoded = jwt.verify(token, "secret");

    req.user = decoded;

    next();
  } catch (err) {
    console.log("JWT ERROR:", err.message);
    return res.status(401).send("Invalid Token");
  }
};