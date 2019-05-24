const unirest = require("unirest"); //unirest is an http request library so any other preferred library can be used.

var payload =
    {
        "SECKEY": "FLWPUBK-8c95ebea5cae616a1504fc0ba4b92ba4-X",
        "txref": "JhrYu9svLy"
    };

var server_url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/verify";
//please make sure to change this to production url when you go live

//make a post request to the server
unirest.post(server_url)
    .headers({'Content-Type': 'application/json'})
    .send(payload)
    .end(function(response) {
        //check status is success.
        if (response.body.data.status === "successful" && response.body.data.chargecode == 00) {
            //check if the amount is same as amount you wanted to charge just to be very sure
            if (response.body.data.amount === "2000") {
                console.log("Payment successful");
                //then give value for the payment
            }
        }
    });
