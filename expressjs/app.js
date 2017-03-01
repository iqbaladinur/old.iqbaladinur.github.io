var express = require('express');
var app = express();
var view_dir = './view/';

app.use(express.static('public'))
app.get('/', function (request, response){
    response.sendFile('biodata.html',{
    	root: view_dir
    })
})
app.listen(3000, function () {
    console.log('Port 3000')
})