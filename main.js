var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');


app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.use(express.static('public'));

 app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride())





var server = app.listen(8083, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})

//sql code
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'insite'
});

//connection.conne  ct();


app.get('/dowork/:search',function(req,res){
  
var cope = req.params;

var sql = "SELECT * FROM SEARCHENTRIES WHERE `KEYWORDS` LIKE '%" + cope.search + "%'";

       var query = connection.query(sql, function (err, result) {

        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            return res.send( result);
        }
    })
  
});

app.get('/dowork/:',function(req,res){
  
var cope = req.params;

var sql = "SELECT * FROM SEARCHENTRIES WHERE `KEYWORDS` LIKE '%" + cope.search + "%'";

       var query = connection.query(sql, function (err, result) {

        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            return res.send( result);
        }
    })
  
});

app.post('/api/book', function (req, res, next) {
//    app.get('/api/book', function (req, res, next) {
    
     //     return res.send("hello");
     
     
    //var cope = req.body.params;
    cope = "";
    var query = connection.query(sql, cope, function (err, result) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            return res.send( result);
        }
    })

})
/**
 * var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'insite'
});
connection.connect();
var sql = "SELECT * FROM SEARCHENTRIES";
app.post('/api/book', function (req, res, next) {
    var cope = req.body.params;
    var query = connection.query(sql, cope, function (err, result) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            return res.send('Ok');
        }
    })})

    app.listen(8080);
 */