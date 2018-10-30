const express = require('express');
const app = express();
app.get('/',function(req,res){
  
  res.send('hello');
});
let port = 3000;
app.listen(port,function(){
    console.log(`server running at ${port}`);
});