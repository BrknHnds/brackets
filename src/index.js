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
module.exports = function check(str, bracketsConfig) {
  bracketsConfig.forEach( (e, i) => {
    if (e[0] === e[1]) {
      e[0] = `${i + 3}`;
      e[1] = `${i + 4}`;
    }
  });

  let strArray = str.split('');
  if (strArray.length % 2 !== 0) return false;
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
// module.exports = function check(str, bracketsConfig) {

//   // заменяем повторяющийся разделитель на уникальный сначала в str, потом в bracketsConfig
//   let strArray = str.split('');
//   if (strArray.length % 2 !== 0) return false;

//   bracketsConfig.forEach((e, i) => {
//                     if (e[0] === e[1]) {
//                       strArray[strArray.indexOf(e[0])] = `${i + 1}`;
//                       strArray[strArray.indexOf(e[0])] = `${i + 2}`;
//                       e[0] = strArray[strArray.indexOf(e[0])];
//                       e[1] = strArray[strArray.indexOf(e[0])];
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


// third
// function check(str, bracketsConfig) {
//   // заменяем повторяющийся разделитель на уникальный сначала в str, потом в bracketsConfig
//   let strArray = str.split('');
//   if (strArray.length % 2 !== 0) return false;

//   bracketsConfig.forEach((e, i) => {
//     if (e[0] === e[1]) {
//       strArray[strArray.indexOf(e[0])] = `${i + 1}`;
//       let tempEl = `${i + 1}`;
//       strArray[strArray.indexOf(e[0])] = `${i + 2}`;
//       let tempE2 = `${i + 2}`;
//       // e[0] = strArray[strArray.indexOf(e[0])];
//       // e[1] = strArray[strArray.indexOf(e[0])];
//                 e[0] = tempEl;
//                 e[1] = tempE2;
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

// let test10x = '|(|)';
// let test10y = [['(', ')'], ['|', '|']];
// let test12x = '((((([](((((((())))888888))))55778777787755556666777777777766)))))';
// let test12y = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// let test15x = '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222';
// let test15y = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// console.log(check(test10x, test10y));
// console.log(check(test12x, test12y));
// console.log(check(test15x, test15y));

// module.exports = function check(str, bracketsConfig) {
// function check(str, bracketsConfig) {
//   // заменяем повторяющийся разделитель на уникальный сначала в str, потом в bracketsConfig
//   let strArray = str.split('');
//   if (strArray.length % 2 !== 0) return false;

//                   console.log(JSON.stringify(strArray));
//                   // bracketsConfig.forEach((e, i) => {
//                   //   if (e[0] === e[1]) {
//                   //     strArray[strArray.indexOf(e[0])] = `${i + 1}`;
//                   //     let tempEl = `${i + 1}`;
//                   //     strArray[strArray.indexOf(e[0])] = `${i + 2}`;
//                   //     let tempE2 = `${i + 2}`; e[0] = tempEl;
//                   //     e[0] = tempEl;
//                   //     e[1] = tempE2;
//                   //   }
//                   // });
//                   bracketsConfig.forEach((e, i) => {
//                     if (e[0] === e[1]) {
//                       let tempEl = `${i + 10}`;
//                       let tempE2 = `${i + 11}`;
//                       for (let j = 0; j < strArray.length; j++) {
//                         if ((strArray[j] === e[0]) && (strArray[j+1] === e[1])) {
//                           strArray[j] = tempEl;
//                           strArray[j+1] = tempE2;
//                           j++;
//                         }
//                       }
//                       e[0] = tempEl;
//                       e[1] = tempE2;
//                     }
//                   });
//                   console.log(JSON.stringify(strArray));

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

// // let test10x = '|(|)';
// // let test10y = [['(', ')'], ['|', '|']];
// let test12x = '((((([](((((((())))888888))))55778777787755556666777777777766)))))';
// let test12y = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// // let test15x = '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222';
// // let test15y = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// // console.log(check(test10x, test10y));
// console.log(check(test12x, test12y));
// console.log(check(test15x, test15y));