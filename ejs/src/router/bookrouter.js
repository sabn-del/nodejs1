var express= require('express');
const booksRouter=express.Router();
const Bookdata = require('../model/bookdata')
function router(nav){
    
    booksRouter.get('/',(req,res)=>{
        Bookdata.find()
        .then(function(books){  //database
        res.render('book',
        {nav,books,success:''})
        console.log(books);
        })
    });
    booksRouter.get('/:id',(req,res)=>{
        const id= req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(books){
        
        res.render('readmore',
        {nav,books})
        })
    });
    booksRouter.get('/edit/:id',(req,res)=>{
        const id= req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(books){
            res.render('edit',{nav,books,id})
        })
    });

    booksRouter.get('/delete/:id',(req,res)=>{
        const id= req.params.id;
        Bookdata.deleteOne({_id:id})
        .then(function(books){
            res.render('book',
            {nav,books,success:"Successfully deleted"})
            console.log(books);
            
        })
    })
      booksRouter.get('/update/:id',(req,res)=>{
        const id= req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(books){
            res.render('update',
            {nav,books,id})
            console.log(books);
            
        })
    })
   
    return booksRouter
}


module.exports=router;