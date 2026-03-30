// function sortAlternating(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   let result = [];
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     if (right >= left) result[result.length] = arr[right--];
//     if (left <= right) result[result.length] = arr[left++];
//   }
//   return result;
// }

// function mostFrequent(arr) {
//   let maxCount = 0;
//   let element;
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) count++;
//     }
//     if (count > maxCount) {
//       maxCount = count;
//       element = arr[i];
//     }
//   }
//   return element;
// }

// function transformArray(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       res[res.length] = arr[i] * 2;
//     } else {
//       res[res.length] = arr[i];
//     }
//   }
//   return res;
// }

// function getPalindromes(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     let reversed = "";
//     for (let j = word.length - 1; j >= 0; j--) {
//       reversed += word[j];
//     }
//     if (word === reversed) {
//       res[res.length] = word;
//     }
//   }
//   return res;
// }

// function incrementNumbers(str) {
//   let res = "";
//   let digits = "0123456789";
//   for (let i = 0; i < str.length; i++) {
//     let found = false;
//     for (let j = 0; j < digits.length; j++) {
//       if (str[i] === digits[j]) {
//         res += (Number(str[i]) + 1);
//         found = true;
//         break;
//       }
//     }
//     if (!found) res += str[i];
//   }
//   return res;
// }


// function difference(arr1, arr2) {
//   let res = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let exists = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         exists = true;
//         break;
//       }
//     }
//     if (!exists) res[res.length] = arr1[i];
//   }
//   return res;
// }