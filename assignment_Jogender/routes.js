var express = require('express');
var router = express.Router();
var studentList = [{
        rollno: 1,
        name: "Ajay",
        standard: "6th"
    },
    {
        rollno: 2,
        name: "Vijay",
        standard: "7th"
    },
    {
        rollno: 3,
        name: "Rahul",
        standard: "8th"
    },
    {
        rollno: 4,
        name: "Ravi",
        standard: "9th"
    },
    {
        rollno: 5,
        name: "Sonu",
        standard: "10th"
    }
]

router.get('/student/getall', (req, res) => {
    res.send(studentList);
});
router.get('/student', (req, res) => {
    let roll = req.query.rollno;
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].rollno == roll) {
            res.send(studentList[i]);
            break;
        } else {
            res.send("No Student Found")
        }
    }
});
router.get('/student/:rollno', (req, res) => {
    let roll = req.params.rollno;
    console.log(roll)
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].rollno == roll) {
            res.send(studentList[i]);
            break;
        } else {
            res.send("No Student Found")
        }
    }
});
router.put('/student/update/:rollno/', (req, res) => {
    let roll = req.params.rollno;
    let newstudent = req.body;
    let student = studentList.filter(student => {
        return student.rollno == roll;
    })[0];
    if (!student) {
        res.status(404).send('The student with the given ID was not found.');
    } else {
        student.name = newstudent.name;
        student.standard = newstudent.standard
        res.send("Name has been updated successfully");
    }
});
router.delete('/student/delete/:rollno', (req, res) => {
    let roll = req.params.rollno;
    let student = studentList.filter(student => {
        return student.rollno == roll;
    })[0];
    let i = studentList.indexOf(student)
    if (!student) {
        res.status(404).send('The student with the given ID was not found.');
    } else {
        studentList.splice(i, 1)
        res.send("Student has been deleted successfully");
    }

});
router.post('/student/addnew', (req, res) => {
    let student = req.body
    console.log(student)
    studentList.push(student);
    res.send("Item has been added successfully");

});

module.exports = router;