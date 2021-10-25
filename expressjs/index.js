var express = require('express');
var app= express();
var path= require('path')
app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
    //res.send("hello")
    res.sendFile(path.join(__dirname,'/src/views/index.html'))

});
app.listen(3000,function(){
    console.log("the server is start");
    console.log(__dirname);
    
})
