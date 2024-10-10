const asyncErrorHandler = require("express-async-handler");
const User = require("../Model/userModel");

exports.fetchUserData = asyncErrorHandler(async (req, res, next) => {
  try {
    const user = await User.findOne({id:req.user.id});

    if (!user) {
      throw new Error("User does not exist please resistor");
    }
    res.status(200).json({
        id:user.id,
        name : user.name,
        college_department : user.college_department,
        counselor : user.counselor,
        hod : user.hod,
        image_url : user.image_url,
        email : user.email,
        hod_id : user.hod_id
    })

  } catch (error) {
    throw new Error(error);
  }
});





