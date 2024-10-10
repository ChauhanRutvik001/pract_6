const reasonsModel = require("../Model/reasonModel.js");
const User2 = require("../Model/userModel");
const asyncErrorHandler = require("express-async-handler");

exports.sendData = asyncErrorHandler(async (req, res, next) => {
    const { id, hod_id, reason, status } = req.body;
    // console.log(id, hod_id, reason, status);
    try {
        // Find the user by userId
        const user = await User2.findOne({ id: id });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        const model = new reasonsModel(req.body);
        await model.save();
        return res.status(200).json({ success: true, message: 'Reason added successfully.', reason: model });

    } catch (error) {
        console.error("Error adding reason:", error);
        return res.status(500).json({ success: false, message: 'Failed to add reason.', error });
    }
});
