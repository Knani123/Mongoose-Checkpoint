var express=require('express');
var app=express();
var connectedWell=require('./database')
app.use(express.json())
var port=3000;
connectedWell()

var router=require('./routers/router')


app.use('/',router)



app.listen(port,(err)=>{
    if(err){throw err}
    console.log('App is runing on http://localhost:%s',port);
})