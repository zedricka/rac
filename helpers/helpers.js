function _parseBarCodeData(barcodeData) {
  var splitData = barcodeData.split('');
  var price = [];

  for (var i = 0; i < splitData.length; i++) {
    if (Number(splitData[i]) || splitData[i] === '0') {
      price.push(splitData[i]);
    }
  }
  var joinPrice = price.join('');
  var makePriceNum = parseInt(joinPrice);

  return makePriceNum;
}

module.exports = {
  _parseBarCodeData
};