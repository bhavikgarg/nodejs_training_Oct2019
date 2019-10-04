var app=require('express')()
var bodyParser=require('body-parser')
var routes=require('./routes')

app.use(bodyParser.json())

routes(app);

app.listen(3000,()=>console.log('Server listening on port 3000'))
