const express = require('express');
const app = express();
var request = require('request');
request({
    url : 'https://blockchain.info/stats?format=json',
    json : true
}, (err,res,body) => {
    btcPrice = body.market_price_usd;
}
);
app.get('/', (req,res)=>{
    res = console.log(':D ... precio en el mercado en dolares:'+btcPrice);
});
app.listen(4000,()=>{
    console.log('serv running port 4000');
});
