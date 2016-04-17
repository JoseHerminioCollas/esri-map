'use strict';

var express = require('express');
var app = express();
app.disable('etag');
app.set('trust proxy', true);

app.use( '/js', express.static( __dirname + '/js'));
app.use( '/css', express.static( __dirname + '/css'));

app.get('/', function (req, res) {
  res.sendFile( __dirname + '/index.html' )
});

if (module === require.main) {
    // Start the server
    var server = app.listen( 8080, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('App listening at http://%s:%s', host, port);
    });
}
