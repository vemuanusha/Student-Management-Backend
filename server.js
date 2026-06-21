require("dotenv").config();

console.log(__filename);

const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

connectDB();

const app = express();
app.use(express.json());
app.get("/", (req,res)=>{
    res.send("Student Management API Running");
});
app.use("/students",studentRoutes);
app.use("/user",userRoutes);
app.use(errorHandler);
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>{
    console.log("Server is running at Port:",PORT);
});


