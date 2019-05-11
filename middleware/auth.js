const jwt = require("jsonwebtoken");
const config = require("config");

//Middleware Function
module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret")); //decode using the custom secret

    req.user = decoded.user; //make req.user decoded
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid." });
  }
};
