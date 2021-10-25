
var express= require('express');
var app=express();
const nav=[{link:'/',name:'home'},{link:'/',name:'about'},{link:'/book',name:'book'},{link:'/author',name:'Author'},{link:'/Admin',name:'Add Book'},{link:'/Admin/Addauthor',name:'Add Author'},{link:'/user/signin',name:'Sign in'},{link:'/user',name:'Sign up'}]

var booksRouter=require('./src/router/bookrouter')(nav)
var authorrouter=require('./src/router/authorrouter')(nav)
var adminrouter=require('./src/router/adminrouter')(nav)
var userrouter=require('./src/router/userrouter')(nav)

app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}))// post
app.use('/book',booksRouter);
app.use('/author',authorrouter);
app.use('/admin',adminrouter);
app.use('/user',userrouter)


app.set('view engine','ejs');
app.set('views','./src/views');

app.get('/',(req,res)=>{
    //res.render('index');
    //res.render('index',{book:['book1,book2'],title:'library'})
    res.render('signin',
    {
        nav
    })
});





 


app.listen(8080,function(){
 console.log('the server is start');
})
