const Wine = require('./wineModel');
const getBIData = require('./../util/getBiLtData');

const usdgbp = 1.2824;
function round5(x) {
  return Math.ceil(x / 5) * 5;
}

const wineController = {
  populate() {
    Wine.remove({}, (err) => {
      if (err) console.log(err);
    });
    getBIData((data) => {
      data.forEach((wine) => {
        const wineDoc = new Wine({
          wineName: wine.wineName,
          vintage: wine.vintage,
          bottleSizeCl: wine.bottleSizeCl,
          caseSize: wine.caseSize,
          caseType: wine.caseType,
          costPrice: wine.costPrice,
          sellPrice: round5((wine.costPrice / 0.85) * usdgbp),
          srcLink: wine.srcLink,
          source: wine.source,
          status: 0,
          currency: wine.currency,
        });
        wineDoc.save((err) => {
          if (err) console.log('Save error: ', err);
        });
      });
    });
  },

  getAllWines(next) {
    Wine.find({}, next);
  },
};

module.exports = wineController;
