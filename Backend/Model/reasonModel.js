const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Charusat")
  .then(() => {
    console.log("Reason schema Connection is successful...");
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
    hod_id : {
        required: true,
        type: String,
    },
    reason:{
      type : String,
      required : true,
    },
    url:{
      type : String,
      required : true,
    },

    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
      }, 
    createdAt: { type: Date, default: Date.now }   
  });


const reasonsModel = new mongoose.model("reasonsModel",userSchema);  

module.exports = reasonsModel;