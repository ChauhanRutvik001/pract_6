const User = require("../Model/userModel");
const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");
const { redirect } = require("react-router-dom");
const fs = require("fs");

const createToken = (id) => {
  return jwt.sign({ id }, "YourSuperSecretLongAndRandomStringHere", {
    expiresIn: "10d",
  });
};

exports.signup = async (req, res, next) => {
  try {
    const user = new User(req.body); // Create a new user instance with the data from the request body
    await user.save(); // Save the new user manually
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "There was an error saving the user.",
    });
  }
};

exports.login = async (req, res, next) => {
  const { id, password } = req.body;
  console.log(req.body);

  try {
    const user = await User.findOne({ id });

    if (user) {
      if (password === user.password) {
        const token = createToken(user.id);

        const isAdmin = user.isAdmin;

        if (isAdmin) {
          res.json({ success: true, isAdmin: true,token,pass :true,user : true});
      } else {
          res.json({ success: true, isAdmin: false,token,pass : true,user : true });
      }
      }else{
        res.status(200).json({ success: true,pass : false,user : true });
      }
    }
    else{
      res.status(200).json({ success: true,pass : false,user : false });
    }
     


    // Generate the token
  } catch (err) {
    console.error(err);
    console.log("error her");
    res.status(401).json({
      success: false,
      error: err.message,
    });
  }
};


