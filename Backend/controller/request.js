const User = require("../Model/reasonModel");
const asyncErrorHandler = require("express-async-handler");

exports.fetchUserData4 = asyncErrorHandler(async (req, res, next) => {
    try {
        const { id, status } = req.body;

        // Find the user by their MongoDB _id (assuming id is the MongoDB _id)
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user status
        user.status = status;
        await user.save();

        // Send back the updated user data in the response (if needed)
        res.status(200).json({ message: 'User status updated successfully', user });
    } catch (error) {
        next(error);
    }
});
