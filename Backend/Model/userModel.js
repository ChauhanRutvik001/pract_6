const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

mongoose
  .connect("mongodb://localhost:27017/Charusat")
  .then(() => {
    console.log("Connection is successful...");
  })
  .catch((err) => {
    console.log("There was an error: " + err);
    throw new Error("Something went wrong.");
  });

const userSchema = mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  name: {
    required: true,
    type: String,
  },
  college_department: {
    type: String,
    required: true,
  },
  counselor: {
    type: String,
    required: true,
  },
  hod: {
    type: String,
    required: true,
  },
  hod_id: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

userSchema.methods.isValidPassword = async function (password, mongoPassword) {
  try {
    console.log(password,mongoPassword)
    console.log(password == mongoPassword)
    return password === mongoPassword;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const User = new mongoose.model("User", userSchema);

module.exports = User; // Corrected export statement
