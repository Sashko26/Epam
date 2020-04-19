const express = require("express");
const bodyParser = require("body-parser");
  
const app = express();
/* const bodyParser = require("body-parser"); */
  

app.use(express.static(__dirname));
console.log(__dirname);
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.get("/form", function (request, response) {
    response.sendfile('form.html');
});

  
app.get("/", function(request, response){
    response.sendfile('form.html');
});

app.post("/form", urlencodedParser, function(request, response){
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    console.log(bodyParser);
    response.send(request.body);
    
});
app.listen(3000);