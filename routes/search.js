var express = require('express');
var book = require("google-books-search");
var search = express.Router();

search.get('/api/:keyword/:field',function(req,res){
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
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send(results);
            }
        else {
             console.log(error);
        }
    })

});

module.exports=search;