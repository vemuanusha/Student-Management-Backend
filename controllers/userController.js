const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const registerUser = async(req,res) => {
    const {name,email,password,role} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({
            message:"User already exists"
        })
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        name,
        email,
        password:hashedPassword,
        role
    });
    res.status(201).json({
    message:"User Registered Successfully",
    data:{
        _id:user._id,
        name:user.name,
        email:user.email
    }
});
}

const loginUser = async(req,res) => {
    const {email,password,role} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({
            message:"Invalid Credentails"
        })
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({
            message:"Invalid Credentails"
   });
}
const accessToken = jwt.sign({
      id:user._id,
      email:user.email,
      role:user.role
   },
   process.env.JWT_SECRET,
   { expiresIn:"15m" }
);
const refreshToken = jwt.sign({
      id:user._id,
      email:user.email,
      role:user.role
   },
   process.env.REFRESH_SECRET,
   { expiresIn:"7d" }
);
user.refreshToken = refreshToken;
await user.save();
    res.status(200).json({
        message:"Successfully Login",
        token:token,
        data:{
            _id:user._id,
            name:user.name,
            email:user.email
        }
    });
}

module.exports = {registerUser,loginUser};