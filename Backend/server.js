const express = require("express");
const app = express();
const router = require("./Router/userRouter");
const dataRouter = require("./Router/dataRoute");
const SendData = require('./Router/sendRoute')
const SendInfo = require('./Router/history')
const SendInfoAdmin = require('./Router/admin_application')
const request = require('./Router/request')
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/api/user", router);
app.use("/api/data",dataRouter);
app.use("/api/send",SendData);
app.use("/api/sendInfo",SendInfo);
app.use("/api/sendInfoAdmin",SendInfoAdmin);
app.use("/api/responce",request);


app.listen(5501, () => {
  console.log("Server has started...");
});


