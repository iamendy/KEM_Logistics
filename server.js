const express = require('express');
const secure = require('express-force-https');
const serveStatic = require("serve-static");
const path = require('path');

//create the express app
const app = express();

//create middleware to handle serving the app
app.use(secure);
app.use('/', serveStatic( path.join(__dirname, '/dist')));

//validation for Rave Payment API
app.get('/payment-verification', (req, res) => {
    res.send('I see you bro')
});


// Catch all routes and redirect to the index file
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
});

//create default port to serve the app
const port = process.env.PORT || 5000;
app.listen(port);

//log a feedback that this app is actually been served
console.log('Server started your project on: ' + port);
