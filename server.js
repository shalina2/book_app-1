const express = require('express');
const pg = require('pg');
const path = require('path');
const superagent = require('superagent');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000   

// Connecting to database
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', error => console.error(error));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/',newSearch);

app.post('/searches',createSearch);

app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));

function Book(info){
  this.title = info.title;
  this.publisher = info.publisher;
  this.publishedDate = info.publishedDate;
  this.description = info.description;

}

// /const  all book = apires .body .item.slice(0,10)

function newSearch (req,res){
  // console.log(req.query );
  res.render('pages/index');
}
function createSearch(req,res){
  // console.log(req.body.search);
  let url = 'https://www.googleapis.com/books/v1/volumes?q=';

  if (req.body.search[1]==='title'){url += `+intitle:${req.body.search[0]}`;}
  if (req.body.search[1]==='author'){url += `+inauthor:${req.body.search[0]}`;}


  superagent.get(url)
    .then(apiRes=>{
      console.log(apiRes.body.items);
      return apiRes.body.items.map(bookResult=> new Book(bookResult.volumeInfo))})
    .then(results=>{
      console.log(results);
      res.render('pages/searches/show',{items: results})
      res.sendFile(path.join(__dirname,'/public/styles/base.css'));

    }).catch(() => res.render('pages/error'));
}

