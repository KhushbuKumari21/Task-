const axios = require("axios");

exports.forwardRequest = async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://localhost:4000${req.originalUrl}`,
      data: req.body,
      headers: req.headers
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).send("Error forwarding request");
  }
};