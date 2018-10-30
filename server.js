const express = require('express');
const app = express();
const superagent = require('superagent');
require('dotenv').config()

const PORT = process.env.PORT||3000

// app.set('views', './views/pages');
app.set('view engine', 'ejs');
app.get('/',newSearch)

  // res.render('pages/index');

 
app.post('/searches',createSearch);
// app.use(express.static(__dirname + '/views/pages'));
app.listen(PORT,function(){
    console.log(`server running at ${PORT}`);
});

// function Book(info){
//   const placeholder Image = 
// }

function newSearch (req,res){
  res.render('pages/index');
}
function createSearch(req,res){
   let URL = 'https://www.googleapis.com/books/v1/volumes?q='

   if (request.body.search[1]==='title'){Url += `+intitle:${req.body.serach[0]}`;}
   if (request.body.search[1]==='title'){Url += `+inauthor:${request.body.serach[0]}`;}
   
   
   superagent .get (url)
   .then(apiResponse=>apiResponse.body.item.map(bookResalt=> new Book (bookResalt.volumeinfo)))
   .then(results=>{
   response.render('pages/show',{items:results})

})
}
 

