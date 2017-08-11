const fs = require('fs');

function getBIData() {
  return new Promise((resolve) => {
    fs.readFile('./BILTStock.txt', 'utf8', (err, data) => {
      if (err) throw err;
      return resolve(data);
    });
  });
}

const headers = ['wine', 'grower', 'vintage', 'size', 'price', 'link'];

getBIData().then((data) => {
  return data.split('\n').slice(1).map((wine) => {
    return wine.split('|').reduce((obj, detail, i) => {
      if (detail !== ' ') {
        if (headers[i] === 'price' || headers[i] === 'vintage') {
          detail = +detail;
        }
        obj[headers[i]] = detail;
      }
      return obj;
    }, {});
  });
});


module.exports = function getBIData() {
  return new Promise((resolve) => {
    fs.readFile('./BILTStock.txt', 'utf8', (err, data) => {
      if (err) throw err;
      const parsed = data.split('\n').slice(1).map((wine) => {
        return wine.split('|').reduce((obj, detail, i) => {
          if (detail !== ' ') {
            if (headers[i] === 'price' || headers[i] === 'vintage') {
              detail = +detail;
            }
            obj[headers[i]] = detail;
          }
          return obj;
        }, {});
      });
      return resolve(parsed);
    });
  });
};
