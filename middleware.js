const express = require('express')
const app = express()
const middleware1 = (req,res,next)=>
{
    // res.send('middleware1');
    next();
} 

const middleware2 = (req,res,next)=>
{
    res.send('middleware2');
    next();
} 

app.use(middleware2)

app.get('/page1',middleware1, function(req,res){
    res.send("for Page1 middleware 1 and 2 will applied");
})

app.get('/page2', function(req,res){
    res.send("Page2 middleware 2 only applied");
})

app.get('/page3', function(req,res){
    res.send("Page3 middleware 2 only applied");
})

app.get('/page4',middleware1,middleware2, function(req,res){
    res.send("Page4 both middleware");
})

app.listen(9090,function(){
    console.log("Running");
})

