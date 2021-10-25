var http=require('http')
var fs = require('fs')
var url= require('url')

var server=http.createServer(function(req,res){
    var q= url.parse(req.url,true)
    if(q.pathname==='/'){
        res.write('action')
        res.end()
    }
    else if(q.pathname==='/register'){
        res.writeHead(200,{'content-type':'text/html'})
       fs.readfile('register.html',function(error,data){
            res.write(data)
            res.end()
        
    })
    }
    else if(q.pathname==='/form action'){
        res.write("<h1>"+q.query.name+"</h1>")
        res.write("<h1>"+q.query.email+"</h1>")
        res.write("<h1>"+q.query.address+"</h1>")
        res.end()
    }
    
    else{
        res.write("page not found")
        res.end()
    }

    
})
server.listen(8080,function(){
    console.log("server is running")
})

