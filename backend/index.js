const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");

const pinRoute = require("./routes/pins");
dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
        console.log("mongodb connected!")
    }).catch(err=>console.log("err"));

app.listen(8800, () => {
    console.log("Backend server is running!");
  });

  app.use("/api/users", userRoute);

  app.use("/api/pins", pinRoute);