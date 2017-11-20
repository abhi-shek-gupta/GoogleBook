const express=require('express');
const http=require('http');
const morgan=require('morgan');
var book = require("google-books-search");

const app=express();

var hostname='localhost';
var port=3000 ;
app.use(morgan('dev'));


app.get('/:keyword/:field',function(req,res){
    var keyword=req.params.keyword;
    var field=req.params.field;
    console.log(keyword);
    console.log(field);
    var options = {
        field: field
    };
    book.search(keyword,options, function(error, results) {
        if ( ! error ) {
            // console.log(results);
             res.send(results);
            }
        else {
             console.log(error);
        }
    })

});

app.use(express.static(__dirname + '/public'));
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// app.use((req,res)=>{
//     console.log(req.headers);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end("connected to server");
// });

var server=http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });