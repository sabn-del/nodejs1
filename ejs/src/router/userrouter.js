var express= require('express');
const userRouter=express.Router();
const Userdata = require('../model/userdata')
const bcrypt=require('bcrypt')


function router(nav){
    userRouter.get('/register',(req,res)=>{
        bcrypt.hash(req.query.passwd,function(err,hashedPass){
         if(err){
             res.send(err)
         }
         var user= {
             username:req.query.name,
             password:hashedPass,
             email:req.query.email,
             address:req.query.address
             
         }
         console.log(user);
         var data =Userdata(user)
         data.save()
         .then(function(){
             res.render('signin')
         })
        })
        //res.render('signup',nav)
    })
    userRouter.get('/signup',(req,res)=>{
         res.render('signup')
    })
    userRouter.get('/login',(req,res)=>{
        let user=req.query.username
        let pass= req.query.password

        Userdata.findOne({username:user})
        .then(user=>{

            if(user){
                bcrypt.compare(pass,user.password,function(err,result){
                    if(err){
                        res.send("password doesn't match")
                    }
                    if(result){
                        res.send("success")
                    }
                })
            }
            else{
                res.send("user not found")
            }

        })
        res.render('signin',nav)
    })
    
    return userRouter
}
module.exports=router;