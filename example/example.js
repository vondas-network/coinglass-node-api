const coinglass = require("../index.js");

var key = "YOUR_API_KEY";
var route = "futures";
var query = "openInterest";
var symbol = "BTC";
var interval = "12H";

let obj = {
    key: key,
    route: route,
    query: query,
    symbol: symbol,
    interval: interval
}

gg = coinglass.getCoinglassData(obj);
gg.then(function(result) {
    console.log(result);
}).catch(err => {
    console.log(err);
})