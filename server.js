'use strict';


const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

app.get('/', (req, res) => {
  let randomNumber=Math.round(Math.random());
  
  res.cookie('a-b-test',(randomNumber == 0)?'a':'b', { maxAge: 900000 });
  res.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));
