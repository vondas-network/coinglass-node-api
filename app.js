/**
 * app.js
 * @author Christopher Konopka
 * @description Core server for facilitating API requests to Coinglass API
 */

/**
 **************************
 * DEPENDENCIES ***********
 ************************** 
 */
const fs = require("fs");
var express = require('express')
const cfonts = require('cfonts');
const ohta = require("./lib/ohta");
const coinglass = require("./lib/coinglass");

/**
 **************************
 * EXPRESS ****************
 ************************** 
 */
var app = express()
var port = 4400
var HOST = '0.0.0.0';

/**
 **************************
 * DYNAMIC ****************
 ************************** 
 */

/**
 * /coinglass
 * @param key - Coinglass API key
 * @param route - Primary data route
 * @param query - The query within the route
 * @param symbol - Token symbol
 * @param interval - Time interval
 * @description 
 * 
 * BTC,ETH,EOS,BCH,LTC,XRP,BSV,ETC,TRX,LINK
 * Bitmex,Binance,Bybit,Okex,Huobi,FTX,Deribit,Kraken,Bitfinex,Phemex
 */
app.get('/coinglass', function(req, res) {
    ohta.fukuisan.info("REQUEST - /getevmasm");
    var key = req.query.key;
    var route = req.query.route;
    var query = req.query.query;
    var symbol = req.query.symbol;
    var interval = req.query.interval;

    let obj = {
        key: key,
        route: route,
        query: query,
        symbol: symbol,
        interval: interval
    }

    var gg = coinglass.getCoinglassData(obj);
    gg.then(function(data) {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
})

/**
 **************************
 * CFONT LOGO *************
 ************************** 
 */
cfonts.say('coinglass', {
    font: 'chrome', // define the font face
    align: 'center', // define text alignment
    colors: ['whiteBright', 'whiteBright'], // define all colors
    background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0', // define how many character can be on one line
    gradient: false, // define your two gradient colors
    independentGradient: true, // define if you want to recalculate the gradient for each new line
    transitionGradient: false, // define if this is a transition between colors directly
    env: 'node' // define the environment cfonts is being executed in
});

/**
 **************************
 * SERVER OP **************
 ************************** 
 */
app.listen(port, HOST, function() {
    ohta.fukuisan.info("PORT: " + port);
})