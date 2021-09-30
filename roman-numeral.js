const log = require('./log'); 

let RomanNumeral = (() => {
  let decimal;
  const NUMERALS = {
     M: 1000,
    CM: 900,
     D: 500,
    CD: 400,
     C: 100,
    XC: 90,
     L: 50,
    XL: 40,
     X: 10,
    IX: 9,
     V: 5,
    IV: 4,
     I: 1,
  };
  
  function updateNumeral(values, numeral) {
    let numberOfNumerals = Math.floor(values['number'] / NUMERALS[numeral]);
    values['number'] -= (NUMERALS[numeral] * numberOfNumerals);
    values['numeral'] += numeral.repeat(numberOfNumerals);
  }
  
  return class RomanNumeral {
    constructor(number) {
      decimal = number;
    }
    
    toRoman() {
      let values = {
        number: decimal,
        numeral: '',
      };
      
      for (let letter in NUMERALS) {
        updateNumeral(values, letter);
      }
      
      return values['numeral'];
    }
  };
})();

module.exports = RomanNumeral;