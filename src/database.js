import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/usertestdb")
    .then(db=>console.log("db is conected"))
    .catch(error=>console.log(error))