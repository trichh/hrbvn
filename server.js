// Requiring packages
var express = require('express');

// Running express
var app = express();

// Uses everything inside of public folder
app.use(express.static('public'));

// Uses packages downloaded with bower
app.use('/public/lib', express.static(__dirname + '/public/lib'));

// Send index.html on any route
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Server running on PORT: ', server.address().port);
});
