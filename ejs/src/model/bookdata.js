const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://SABNA:sabna@mongodata.ffqww.mongodb.net/library?retryWrites=true&w=majority ') //database connection
const Schema =mongoose.Schema  // schema definition
  
const BookSchema= new Schema({
    name:String,
    author:String,
    publisher:String,
    img:String,
    price:Number
})

var Bookdata= mongoose.model('bookdata',BookSchema) //model creation
module.exports= Bookdata;