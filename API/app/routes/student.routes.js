module.exports=function(app){
    var student=require('../controllers/student.controller.js')
       // Create a new student
       app.post('/api/student', student.create);
 
       // Retrieve all student
       app.get('/api/student', student.findAll);
    
       // Retrieve a single student by Id
       app.get('/api/student/:id', student.findOne);
    
       // Update a student with Id
       app.put('/api/student/:id', student.update);
    
       // Delete a student with Id
       app.delete('/api/student/:id', student.delete);
}