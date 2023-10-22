// first
// module.exports = function check(str, bracketsConfig) {
//   bracketsConfig.forEach(e => {

//     let leftSymbolCount = (str.match(new RegExp('\\' + e[0], 'g'))).length;
//     let rightSymbolCount = (str.match(new RegExp('\\' + e[1], 'g'))).length;

//     if (leftSymbolCount !== rightSymbolCount) return false;
//   });
//   return true;
// }

// function check(str, bracketsConfig) {
//   bracketsConfig.forEach(e => {

//     let leftSymbolCount = (str.match(new RegExp('\\' + e[0], 'g'))).length;
//     let rightSymbolCount = (str.match(new RegExp('\\' + e[1], 'g'))).length;

//     if (leftSymbolCount !== rightSymbolCount) return false;
//   });
//   return true;
// }


function check(str, bracketsConfig) {
  let strArray = str.split('');
  // console.log(`strArray is ${strArray}`);
  if (strArray.length % 2 !== 0) return false

  let openSymbolsArray = bracketsConfig.map(e => e[0]);
  // console.log(`openSymbolsArray is ${openSymbolsArray}`);
  let closeSymbolsArray = bracketsConfig.map(e => e[1]);
  // console.log(`closeSymbolsArray is ${closeSymbolsArray}`);
  let compareArray = [];
  let openIndex = null;
  let closeIndex = null;

  for (let i = 0; i < strArray.length; i++) {
    openIndex = openSymbolsArray.indexOf(strArray[i]);
    if (openIndex !== -1) {
      compareArray.push(openIndex);
    }
    closeIndex = closeSymbolsArray.indexOf(strArray[i]);
    if (closeIndex !== -1) {
      // console.log(`oi & ci before ${openIndex}, ${closeIndex}`)
      openIndex = compareArray.pop();
      // console.log(`oi & ci after ${openIndex}, ${closeIndex}`)
      if (openIndex !== closeIndex) return false;
    }
  }
  if (compareArray.length === 0) {
    return true;
  } else return false;
}
console.log(check('|(|)', [['(', ')'], ['|', '|']]));