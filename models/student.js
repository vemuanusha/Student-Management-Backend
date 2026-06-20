const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    rollNumber: {
    type: Number,
    required: true,
    unique: true
},
    name:{
    type: String,
    required: true
},
    age:{
    type: Number,
    required: true
},
    marks:{
    type: Number,
    required: true,
    max:100
},
    city:{
    type: String,
    required: true,
},
});

const Student = new mongoose.model("Students Data",studentSchema);

module.exports=Student;