const express = require('express');
const secure = require('express-force-https');
const serveStatic = require("serve-static");
const path = require('path');
var bodyParser = require('body-parser');
const axios = require("axios"); //axios is an http request library so any other preferred library can be used.

//create the express app
const app = express();

//create middleware to handle serving the app
app.use(secure);
app.use('/', serveStatic(path.join(__dirname, '/dist')));
app.use( bodyParser.json() );
app.use(express.json());


//validation for Rave Payment API
app.post('/payment-verification', (req, res) => {
    let payload =
        {
            SECKEY: "FLWSECK-f64df19dd8a24e371878b08fbab80eb8-X",
            txref: req.body.txref
        };

    let server_url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/verify";
//please make sure to change this to production url when you go live

//make a post request to the server
    axios.post(server_url, payload)
        .then(response => {
            if
            (   req.body.amount === response.data.data.amount
                &&
                req.body.currency === response.data.data.currency
                &&
                req.body.txref === response.data.data.txref
                &&
                response.data.status === "success"
            ){
                res.send(response)
            } else{
                res.status(400).send({
                    message: 'This transaction could not be verified!'
                });
            }
        })
        .catch(err =>console.log(err));

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
