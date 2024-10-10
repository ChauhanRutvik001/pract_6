const utils = require("util");
const User = require("../Model/userModel");
const jwt = require("jsonwebtoken");
const asyncErrorHandler = require("express-async-handler");

exports.protect = asyncErrorHandler(async (req, res, next) => {
  const newToken = req.headers.authorization;
  console.log(newToken);
  let token;
  if (newToken && newToken.startsWith("Bearer")) {
    token = newToken.split(" ")[1];
    console.log(token);
  }
  if (!token) {
    throw new Error(
      "Invalid authorization token. Please provide a valid token."
    );
  }

  // 2. validate token
  try {
    const decodedToken = await utils.promisify(jwt.verify)(
      token,
      "YourSuperSecretLongAndRandomStringHere"
    );
    console.log(decodedToken);
    token = decodedToken;
  } catch (error) {
    throw new Error("Token has expired.");
  }

  // 3. If user does not exits.
  const user = await User.findOne({id:token.id});
  console.log(user);
  if (!user) throw new Error("The user with given token doen not exits.");

  // 4. If user changed password after the token was issued.
  // if (user.isPasswordChanged(token.iat)) {
  //     throw new Error("The password has been changed recently. Please login again.");
  // }

  // 5. Allow user to access route.
  req.user = user;
  next();
});
