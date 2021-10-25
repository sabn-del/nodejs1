var express= require('express');
const authorrouter=express.Router();
function authrouter(nav){
/*var authors=[
    {
    authorname:"AjayPandey",
    aboutauthor:"Ajay Pandey, also known as Ajay K. Pandey, is an English author. He has written several books like You are the Best Wife, You are the Best Friend, A Girl to Remember. His first book was You are the Best Wife"
    },
   {
       authorname:"A.p.j AbdhulKalam",
       aboutauthor:"Avul Pakir Jainulabdeen Abdul Kalam (/ˈəbdəl kəˈlɑːm/ (About this soundlisten); 15 October 1931 – 27 July 2015) was an Indian aerospace scientist who served as the 11th president of India from 2002 to 2007"
   },
   {
    authorname:"Madhavikutty",
    aboutauthor:"Kamala Das (born Kamala; 31 March 1934–31 May 2009), popularly known by her one-time pen name Madhavikutty and married name Kamala Das, was an Indian poet in English as well as an author in Malayalam from Kerala,"
   }
];*/

authorrouter.get('/:i',(req,res)=>{
    const id=req.params.i;
    console.log(id);
    res.render(('sinauthor',{nav,author:authors[id]
    })
    );
});
authorrouter.get('/',(req,res)=>{
    res.render('author',
    {nav,authors
    });
});
 return authorrouter
}

module.exports=authrouter;