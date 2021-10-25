var http=require('http')
var fs=require('fs')
var url =require('url')
var server=http.createServer(function(req,res){
    var query=url.parse(req.url,true)
  if(query.pathname==='/'){
      res.write('Register')
      res.end()
  }
  else if(query.pathname==='/index'){
    res.writeHead(200,{'content-type':'text/html'})
    fs.readFile('index.html',function(error,data){
        
            res.write(data)
           res.end()
        
    })

  }
  else if(query.pathname==='/formaction'){
      res.write("<h1>"+query.query.name+"</h1>")
      res.end()
  }
  else{
      res.write("page not found")
      res.end()
      
  }

})
server.listen(8080,function(){
    console.log("the server is running");
})