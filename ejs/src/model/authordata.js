const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://SABNA:sabna@mongodata.ffqww.mongodb.net/library?retryWrites=true&w=majority');
const Schema=mongoose.Schema;

const AuthorSchema=new Schema({
    authorname:String,
    aboutauthor:String,
    img:String
})

var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;
