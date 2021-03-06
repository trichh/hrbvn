// Requiring packages
var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

// Creating email Credentials to send email with
var emailCredentials = 'smtps://' + process.env.EMAIL + '%40gmail.com:' + process.env.PASS + '@smtp.gmail.com';

// Running express
var app = express();

// Parses incoming requests under req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Uses everything inside of public folder
app.use(express.static('public'));

// Uses packages downloaded with bower
app.use('/public/lib', express.static(__dirname + '/public/lib'));

// Sending email
app.post('/email', function(req, res) {
  var transporter = nodemailer.createTransport(emailCredentials);
  var mailOptions = {
    from: req.body.email,
    to: req.body.recipient,
    subject: req.body.subject,
    text: req.body.message
  }
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
});

// Send index.html on any route
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Server running on PORT: ', server.address().port);
});
