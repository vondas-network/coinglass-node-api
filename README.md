# coinglass-node-api
Unofficial Coinglass API for Node.js

# Requirements
- [Node.js](https://nodejs.org/en/)
- [Coinglass API](https://coinglass.github.io/API-Reference/#api-key)

# Install Dependencies
``` bash
npm i
```

# How to use

## Examples

What if I wanted data from a route like this?
``` bash
GET https://open-api.coinglass.com/api/pro/v1/futures/openInterest
```
 
### Postman Example
``` bash
curl --location --request GET 'localhost:4400/coinglass?key=YOUR_API_KEY&interval=12H&route=openInterest&symbol=BTC&query=futures'
```

#### Usage
``` javascript
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
```

#### Response
``` json 
{
    "code": "0",
    "msg": "success",
    "data": [
        {
            "exchangeName": "All",
            "symbol": "BTC",
            "openInterest": 11224695209.685104,
            "openInterestAmount": 488482.1483126145,
            "volUsd": 20778086631.993153,
            "h24Change": 0.47,
            "rate": 100,
            "volChangePercent": 53.22,
            "h1OIChangePercent": 0.25,
            "h4OIChangePercent": 0.26,
            "avgFundingRate": 0.009287648822308458,
            "oichangePercent": 0.47
        },
        {
            "exchangeName": "Binance",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 3393491198.563,
            "openInterestAmount": 147563.552,
            "volUsd": 10669728827.85,
            "h24Change": 1.2,
            "rate": 30.23,
            "h1OIChangePercent": 0.22,
            "h4OIChangePercent": 0.13
        },
        {
            "exchangeName": "CME",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 1975221648.3,
            "openInterestAmount": 86346.6,
            "volUsd": 822150045.1,
            "h24Change": -2.04,
            "rate": 17.59,
            "h1OIChangePercent": 0,
            "h4OIChangePercent": 0
        },
        {
            "exchangeName": "OKX",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 1871408606.5213,
            "openInterestAmount": 81368.59799777134,
            "volUsd": 2067455725.43082,
            "h24Change": -0.61,
            "rate": 16.67,
            "h1OIChangePercent": 0.09,
            "h4OIChangePercent": 0.45
        },
        {
            "exchangeName": "Bybit",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 1679934441.5,
            "openInterestAmount": 73052.78,
            "volUsd": 2787266646.7909966,
            "h24Change": 3.02,
            "rate": 14.96,
            "h1OIChangePercent": 0.12,
            "h4OIChangePercent": -0.31
        },
        {
            "exchangeName": "Bitget",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 1200701060.8375,
            "openInterestAmount": 52239.3845,
            "volUsd": 3366597276.45,
            "h24Change": 1.76,
            "rate": 10.69,
            "h1OIChangePercent": 1.52,
            "h4OIChangePercent": 2.23
        },
        {
            "exchangeName": "Deribit",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 531649540,
            "openInterestAmount": 23039.03,
            "volUsd": 180421570,
            "h24Change": 0.14,
            "rate": 4.73,
            "h1OIChangePercent": -0.03,
            "h4OIChangePercent": 0.12
        },
        {
            "exchangeName": "Bitmex",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 224489066.6751392,
            "openInterestAmount": 9760.468,
            "volUsd": 350631578.7693223,
            "h24Change": -1.85,
            "rate": 1.99,
            "h1OIChangePercent": -0.22,
            "h4OIChangePercent": -1.78
        },
        {
            "exchangeName": "Bitfinex",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 111718781.41162995,
            "openInterestAmount": 4857.54952005,
            "volUsd": 9566441.31860396,
            "h24Change": -1.4,
            "rate": 0.99,
            "h1OIChangePercent": -0.24,
            "h4OIChangePercent": 0.13
        },
        {
            "exchangeName": "Huobi",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 109516742.6218,
            "openInterestAmount": 4761.838794793147,
            "volUsd": 254875574.6182,
            "h24Change": 4.1,
            "rate": 0.97,
            "h1OIChangePercent": 0.75,
            "h4OIChangePercent": -0.06
        },
        {
            "exchangeName": "dYdX",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 73299765.522175,
            "openInterestAmount": 3188.551,
            "volUsd": 157651918.327,
            "h24Change": -4.13,
            "rate": 0.65,
            "h1OIChangePercent": -0.31,
            "h4OIChangePercent": -0.43
        },
        {
            "exchangeName": "Kraken",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 43124877,
            "openInterestAmount": 1862.81,
            "volUsd": 14524056,
            "h24Change": -2.01,
            "rate": 0.38,
            "h1OIChangePercent": -0.12,
            "h4OIChangePercent": -0.86
        },
        {
            "exchangeName": "CoinEx",
            "symbol": "BTC",
            "price": 22984,
            "openInterest": 10139480.73256,
            "openInterestAmount": 440.9865,
            "volUsd": 97216971.338208,
            "h24Change": 2.73,
            "rate": 0.09,
            "h1OIChangePercent": 0.65,
            "h4OIChangePercent": 1.55
        }
    ],
    "success": true
}
```

## Resources
