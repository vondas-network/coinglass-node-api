/**
 * @name index.js
 * @author Christopher Konopka 
 * @version v0.0.1
 * @summary Unofficial Coinglass API for Node.js
 */

/**
 * Libraries
 */
const fs = require("fs");
const axios = require('axios');

/**
 * coinglass
 */
function getCoinglassData(obj) {
    console.log("getCoinglassData - Start - " + obj.route);
    var output = new Promise(async(resolve, reject) => {
        try {
            response = await axios.get("https://open-api.coinglass.com/api/pro/v1/" + obj.route + "/" + obj.query, {
                headers: {
                    'coinglassSecret': obj.key,
                },
                params: obj
            });
        } catch (ex) {
            response = null;
            ohta.fukuisan.info(ex);
            reject(ex);
        }
        if (response) {
            const json = response.data;

            resolve(json);
        }
    });
    console.log("getCoinglassData - End - " + obj.route);
    return output
}

module.exports = { getCoinglassData }