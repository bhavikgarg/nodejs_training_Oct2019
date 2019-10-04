var student = {
    student1: {
      firstname: "khaza",
      lastname: "khan",
      age: 25,
      id: 1
    },
    student2: {
      firstname: "Nazia",
      lastname: "Hussain",
      age: 37,
      id: 2
    },
    student3: {
      firstname: "Rhitu",
      lastname: "Rajey",
      age: 17,
      id: 3
    },
    student4: {
      firstname: "Naushad",
      lastname: "Alam",
      age: 17,
      id: 4
    }
  }

exports.create = function(req, res) {
var newStudent = req.body;
student["student" + newStudent.id] = newStudent;
console.log("--->After Post, student:\n" + JSON.stringify(student, null, 4));
res.end("Post Successfully: \n" + JSON.stringify(newStudent, null, 4));
};

exports.findAll = function(req, res) {
console.log("--->Find All: \n" + JSON.stringify(student, null, 4));
res.end("All student: \n" + JSON.stringify(student, null, 4));  
};
exports.findOne = function(req, res) {
  var students = student["student" + req.params.id];
  console.log("--->Find student: \n" + JSON.stringify(students, null, 4));
  res.end( "Find a student:\n" + JSON.stringify(students, null, 4));
};



exports.update = function(req, res) {
var id = parseInt(req.params.id);
var updatedstudent = req.body; 
if(student["student" + id] != null){
// update data
student["student" + id] = updatedstudent;

console.log("--->Update Successfully, student: \n" + JSON.stringify(student, null, 4))

// return
res.end("Update Successfully! \n" + JSON.stringify(updatedstudent, null, 4));
}else{
res.end("Don't Exist student:\n:" + JSON.stringify(updatedstudent, null, 4));
}
};

exports.delete = function(req, res) {
var deletestudent =student["student" + req.params.id];
delete student["student" + req.params.id];
console.log("--->After deletion, student list:\n" + JSON.stringify(student, null, 4) );
res.end( "Deleted student: \n" + JSON.stringify(deletestudent, null, 4));
};