const Student = require("../models/student");

const getAllStudents = async(req,res,next) => {
    try{
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        let students;
        const city = req.query.city;
        if(city){
            students = await Student.find({city});
        }
        else{
            const students = await Student.find().skip(skip).limit(limit);
        }
        res.status(200).json({
        message:"All Students",
        data:students
    });
    }
    catch(error){
        next(error);
    }
}

const getStudentByRollNumber = async(req,res,next) => {
    try{
        const student = await Student.findOne({
                rollNumber: Number(req.params.rollNumber)
            });
    if(!student){
        return res.status(404).json({
            message:"Not Found"
        })
    }
    res.status(200).json({
        message:"Found",
        data:student
    });
    }
    catch(error){
        next(error);
    }
}

const createStudent = async(req,res,next) => {
    try{
        const student = await Student.create(req.body);
    res.status(201).json({
        message:"Student added Successfully",
        data:student
    });
    }
    catch(error){
        next(error);
    }
}

const updateStudent = async(req,res,next) => {
    try{
        const student = await Student.findOneAndUpdate(
        { rollNumber: Number(req.params.rollNumber) },
        req.body,
        {new :true}
    );
    if(!student){
        return res.status(404).json({
            message:"Student not found"
        });
    }
    res.json({
        message:"Successfully Updated",
        data:student
    });
  }
  catch(error){
    next(error);
  }
  
}

const deleteStudent = async(req,res,next) => {
    try{
        const student = await Student.findOneAndDelete(
        { rollNumber: Number(req.params.rollNumber) },
    );
    if(!student){
        return res.status(404).json({
            message:"Student not found"
        })
    }
    
    res.json({
        message:"Successfully Deleted",
        data:student
    });
    }
    catch(error){
        next(error);
    }
}

const searchStudentByName = async(req,res,next) => {
    try{
      console.log("Query:", req.query);
      console.log("Params:", req.params);
      const student = await Student.find({
        name:{
        $regex:req.query.name,
        $options:"i"
    }});
      res.status(200).json({
        message:"Stundent Found",
        data:student
      });
    }
    catch(error){
       next(error);
    }
}

module.exports={
    getAllStudents,
    getStudentByRollNumber,
    createStudent,
    updateStudent,
    deleteStudent,
    searchStudentByName
}