var express = require('express');
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
    return res.send("hello");
   /* var cope = req.body.params;
    var query = connection.query(sql, cope, function (err, result) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            return res.send('Ok');
        }
    })
*/
})

    app.listen(8080);