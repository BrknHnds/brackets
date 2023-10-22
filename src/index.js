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



// second 17 / 20
// module.exports = function check(str, bracketsConfig) {
//   bracketsConfig.forEach( (e, i) => {
//     if (e[0] === e[1]) {
//       e[0] = `${i + 3}`;
//       e[1] = `${i + 4}`;
//     }
//   });

//   let strArray = str.split('');
//   if (strArray.length % 2 !== 0) return false;
//   let openSymbolsArray = bracketsConfig.map(e => e[0]);
//   let closeSymbolsArray = bracketsConfig.map(e => e[1]);
//   let compareArray = [];
//   let openIndex = null;
//   let closeIndex = null;

//   for (let i = 0; i < strArray.length; i++) {
//     openIndex = openSymbolsArray.indexOf(strArray[i]);
//     if (openIndex !== -1) {
//       compareArray.push(openIndex);
//     }
//     closeIndex = closeSymbolsArray.indexOf(strArray[i]);
//     if (closeIndex !== -1) {
//       openIndex = compareArray.pop();
//       if (openIndex !== closeIndex) return false;
//     }
//   }
//   if (compareArray.length === 0) {
//     return true;
//   } else return false;
// }

// second
// function check(str, bracketsConfig) {
//   let strArray = str.split('');
//   let openSymbolsArray = bracketsConfig.map(e => e[0]);
//   let closeSymbolsArray = bracketsConfig.map(e => e[1]);
//   let compareArray = [];
//   let openIndex = null;
//   let closeIndex = null;

//   for (let i = 0; i < strArray.length; i++) {
//     openIndex = openSymbolsArray.indexOf(strArray[i]);
//     if (openIndex !== -1) {
//       compareArray.push(openIndex);
//     }
//     closeIndex = closeSymbolsArray.indexOf(strArray[i]);
//     if (closeIndex !== -1) {
//       openIndex = compareArray.pop();
//       if (openIndex !== closeIndex) return false;
//     }
//   }
//   if (compareArray.length === 0) return true;
// }
// console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));

// temp
// var test = function(str) {
//   var chars = str.split(''),
//       stack = [],
//       open = ['{', '(', '['],
//       close = ['}', ')', ']'],
//       closeIndex,
//       openIndex;
//   // Проходимся по строке, проверяя каждый ее символ (п.4).
//   for (var i = 0, len = chars.length; i < len; i++) {
//      openIndex = open.indexOf(chars[i]);
//      console.log(openIndex);
//      if (openIndex !== -1) {
//          // Нашли открывающую скобку. Помещаем ее в стек (п.2).
//          stack.push(openIndex);
//          continue;
//      }
//      closeIndex = close.indexOf(chars[i]);
//      if (closeIndex !== -1) {
//          // Нашли закрывающую скобку. Проверяем ее соответствие открывающей (п.3).
//          openIndex = stack.pop();
//          if (closeIndex !== openIndex) {
//              return false;
//          }
//      }
//   }
//   // Проверяем дисбаланс открытых/закрытых скобок (п.5).
//   if (stack.length !== 0) {
//       return false;
//   }
//   return true;
// }

// console.log(test('text with([brackets])')); // true
// console.log(test('text with ([wrong brackets)]')); // false
// console.log(test('text with [wrong brackets')); // false



//third
module.exports = function check(str, bracketsConfig) {

  // заменяем повторяющийся разделитель на уникальный сначала в str, потом в bracketsConfig
  let strArray = str.split('');
  if (strArray.length % 2 !== 0) return false;

  bracketsConfig.forEach((e, i) => {
                    if (e[0] === e[1]) {
                      strArray[strArray.indexOf(e[0])] = `${i + 1}`;
                      strArray[strArray.indexOf(e[0])] = `${i + 2}`;
                      e[0] = strArray[strArray.indexOf(e[0])];
                      e[1] = strArray[strArray.indexOf(e[0])];
                      console.log(e[0]);
                      console.log(e[1]);
    }
  });

  let openSymbolsArray = bracketsConfig.map(e => e[0]);
  let closeSymbolsArray = bracketsConfig.map(e => e[1]);
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
      openIndex = compareArray.pop();
      if (openIndex !== closeIndex) return false;
    }
  }
  if (compareArray.length === 0) {
    return true;
  } else return false;
}


// third
// function check(str, bracketsConfig) {

//   // заменяем повторяющийся разделитель на уникальный сначала в str, потом в bracketsConfig
//   let strArray = str.split('');
//   if (strArray.length % 2 !== 0) return false;

//   bracketsConfig.forEach((e, i) => {
//     if (e[0] === e[1]) {
//       console.log(strArray[strArray.indexOf(e[0])]);
//       console.log(strArray[strArray.indexOf(e[0], strArray.indexOf(e[0]) + 1)]);
//       strArray[strArray.indexOf(e[0])] = `${i + 1}`;
//       strArray[strArray.indexOf(e[0])] = `${i + 2}`;
//       e[0] = `${i + 1}`;
//       e[1] = `${i + 2}`;
//     }
//   });

//   let openSymbolsArray = bracketsConfig.map(e => e[0]);
//   let closeSymbolsArray = bracketsConfig.map(e => e[1]);
//   let compareArray = [];
//   let openIndex = null;
//   let closeIndex = null;

//   for (let i = 0; i < strArray.length; i++) {
//     openIndex = openSymbolsArray.indexOf(strArray[i]);
//     if (openIndex !== -1) {
//       compareArray.push(openIndex);
//     }
//     closeIndex = closeSymbolsArray.indexOf(strArray[i]);
//     if (closeIndex !== -1) {
//       openIndex = compareArray.pop();
//       if (openIndex !== closeIndex) return false;
//     }
//   }
//   if (compareArray.length === 0) {
//     return true;
//   } else return false;
// }
// console.log(check('|(|)', [['(', ')'], ['|', '|']]));
// console.log(check('8888877878887777777888888887777777887887788788887887777777788888888887788888', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]));