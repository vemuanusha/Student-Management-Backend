const express = require("express");
const router = express.Router();

const { getAllStudents, 
    getStudentByRollNumber, 
    createStudent, updateStudent, 
    deleteStudent, searchStudentByName} = require("../controllers/studentcontroller");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post("/upload",upload.single("photo"),(req,res) => {
    res.json({
        message:"File Uploaded Successfully",
        File:req.file
    });
})

router.get("/",getAllStudents);

router.get("/search",searchStudentByName);

router.get("/:rollNumber",getStudentByRollNumber);

router.post("/",authMiddleware, createStudent);

router.put("/:rollNumber",authMiddleware, updateStudent);

router.delete("/:rollNumber",authMiddleware,adminMiddleware, deleteStudent);


module.exports = router;