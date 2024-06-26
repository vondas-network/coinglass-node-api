/**
 * @name init.js
 * @description Initializes API routes, loads API key environmental variables into memory
 */

/**
 * @global
 */
"use strict";
const coinglass = require("./lib/coinglass");

module.exports = function(obj) {
    console.log(obj)
    var gg = coinglass.getCoinglassData(obj);
    gg.then(function(data) {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
};