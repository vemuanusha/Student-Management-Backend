const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
    console.log(req.headers.authorization);
    try{
        if(!req.headers.authorization){
               return res.status(401).json({
                message:"No Token Provided"
            });
        }
        const token = req.headers.authorization.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;
        req.user.role
        next();
    }
    catch(error){
        return res.status(401).json({
            message:"Unauthorized"
        });
    }
}

module.exports = authMiddleware;