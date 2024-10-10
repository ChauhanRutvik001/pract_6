const User = require("../Model/reasonModel");
const asyncErrorHandler = require("express-async-handler");

exports.fetchUserData2 = asyncErrorHandler(async (req, res, next) => {
    try {
        const userId = req.user.id;
        console.log("why user" + userId)
        const users = await User.find({ id: userId }).sort({ createdAt: -1 }); // Sort by createdAt field in descending order
        console.log("Users:", users);

        if (!users || users.length === 0) {
            throw new Error("No users found");
        }

        // Map the user data to desired format
        const userData = users.map(user => ({
            id: user.id,
            hod_id: user.hod_id,
            reason: user.reason,
            status: user.status,
            url: user.url,
        }));

        res.status(200).json(userData);
    } catch (error) {
        // Handle error
        next(error);
    }
});
