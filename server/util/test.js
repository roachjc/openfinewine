const fs = require('fs');
const request = require('request');

const headers = ['wineName', 'grower', 'vintage', 'size', 'costPrice', 'srcLink'];

function getBIData() {
  fs.readFile('/Users/jonroach/Programming/codesmith/real-time-wine/server/sample-data/BILTStock2.txt', 'utf8', (err, data) => {
  // request('https://www.biwine.com/webservice/BILTStock.txt', (err, res, data) => {
    if (err) throw err;
    const parsed = data.split('\n').slice(1).map((wine) => {
      return wine.split('|').reduce((obj, detail, i) => {
        if (detail !== ' ') {
          if (headers[i] === 'costPrice' || headers[i] === 'vintage') {
            detail = +detail;
          }
          obj[headers[i]] = detail;
        }
        return obj;
      }, {});
    })
    .filter(wine => (wine.size === 'Case of 12 btls' && wine.wineName !== 'Mouton Rothschild Parcel 05,08,09,10,12'))
    .map((wine) => {
      wine.bottleSizeCl = 75;
      wine.caseSize = 12;
      wine.caseType = 'OWC';
      wine.source = 'BI Fine Wine';
      wine.currency = 'GBP';
      delete wine.size;
      // console.log(typeof wine.vintage);
      // console.log('vintage: ', wine.vintage);
      return wine;
    });
    console.log(parsed);
  });
}

getBIData()