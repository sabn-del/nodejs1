const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://SABNA:sabna@mongodata.ffqww.mongodb.net/library?retryWrites=true&w=majority ') //database connection
const Schema =mongoose.Schema  // schema definition

const UserSchema=new Schema({
    username:String,
    password:String,
    email:String,
    address:String,
})
var Userdata= mongoose.model('userdata',UserSchema) //model creation
module.exports= Userdata;