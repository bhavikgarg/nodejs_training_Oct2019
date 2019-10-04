const mockStudents=require('./mock_students');

module.exports=(app)=>{
    app.get('/all', (req,res)=>res.send(mockStudents))
    app.get('/:roll', (req,res)=>res.send(mockStudents.filter(student=>student.roll==req.params.roll)[0]))
    app.post('/',(req,res)=>{
        mockStudents.push(req.body.newStudent)
        res.send(mockStudents)
    })
}