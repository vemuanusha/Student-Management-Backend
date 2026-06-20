const bcrypt = require("bcrypt");
const User = require("../models/user")
const jwt = require("jsonwebtoken");

const refreshAccessToken = async(req,res) => {

    const { refreshToken } = req.body;

    if(!refreshToken){
        return res.status(401).json({
            message:"Refresh Token Required"
        });
    }

    try{

        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_SECRET
        );

        const user = await User.findById(decoded.id);

        if(!user || user.refreshToken !== refreshToken){
            return res.status(401).json({
                message:"Invalid Refresh Token"
            });
        }

        const accessToken = jwt.sign(
            {
                id:user._id,
                email:user.email,
                role:user.role
            },
            process.env.JWT_SECRET,
            { expiresIn:"15m" }
        );

        res.status(200).json({
            accessToken
        });

    }
    catch(error){
        res.status(401).json({
            message:"Invalid Refresh Token"
        });
    }
}

module.exports=refreshToken;