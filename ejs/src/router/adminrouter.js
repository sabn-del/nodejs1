var express= require('express')
const Bookdata = require('../model/bookdata')
const adminrouter=express.Router();
const Authordata= require('../model/authordata')
const multer=require('multer') // image uploading

 // define storage for images
 const storage = multer.diskStorage({
  
  // destination for file
  destination: function (req, file, cb) {
      cb(null, './public/image')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })
  const upload=multer({
    storage:storage,
    limits:{
      fieldSize:1024*1024*3,
    }
  })
function admrouter(nav){
adminrouter.get('/',(req,res)=>{
   res.render('Addbook',{
       nav
   });
})
adminrouter.get('/Addauthor',(req,res)=>{
    res.render('Addauthor',{
        nav
    });
})
 adminrouter.post('/add',upload.single('img'),function(req,res){
      var items={
          name:req.body.name,
          author: req.body.author,
          publication: req.body.publication,
          price:req.body.price,
          img: req.file.filename
      }
      
      var book= Bookdata(items); 
      book.save();
      res.redirect('/');
 })
 adminrouter.post('/addauth',upload.single('image'),function(req,res){
    var items={
        authorname: req.body.author,
        aboutauthor: req.body.aboutauthor,
        img: req.body.image
        
    }
    console.log(items);
    var author= Authordata(items); 
    author.save();
    res.redirect('/Admin/Addauthor');
})
adminrouter.post('/update',upload.single('img'),function(req,res){
  var items={
      name:req.body.name,
      author: req.body.author,
      publication: req.body.publication,
      price:req.body.price,
      img: req.file.filename,
      id:req.body.id
  }
  
   //var book= Bookdata(items); 
  Bookdata.updateOne({_id:items.id},{$set:items})
    .then(function(){
  res.redirect('/book');
    })
})

 return adminrouter;
}
module.exports=admrouter;