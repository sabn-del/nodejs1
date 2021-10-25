var http=require('http')
var fs= require('fs')
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    fs.readFile('test.html',function(error,data){
        if(error){
            res.writeHead(404)
            res.write('Error:page not found')
        }
        else{
            res.write(data)
        }
    
    res.end()
    })
})
server.listen(8080)
