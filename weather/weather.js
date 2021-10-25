var  http=require('http')
var url="https://api.openweathermap.org/data/2.5/forecast?q=Kozhikode&appid=ef9fae413d03ca2fd7da4bcccd71d7d7"
var server= http.createServer(function(req,response){
    var request= require('request')

    request(url,function(err,res,body){
        var data= JSON.parse(body)
        response.write("<html><body><div>")
        response.write("<h1>"+"cityname:"+data.city['name']+"</h1>")
        response.write("<h1>"+new Date(data.city['sunset']*1000)+"</h1>")
        response.write("</div></body></html>")
        response.end()
    })
    
})
server.listen(8080)