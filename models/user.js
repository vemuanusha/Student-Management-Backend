const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        max:50
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","teacher","student"],
        default:"student"
    },
    refreshToken:{
                type:String
    }
});

const User = new mongoose.model("User",userSchema);

module.exports=User;