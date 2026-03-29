// 1-masala
function sortDescStable(arr) {
  return arr
    .map((v, i) => ({ v, i }))
    .sort((a, b) => b.v - a.v || a.i - b.i)
    .map((obj) => obj.v);
}

// 2-masala
function mostFrequent(arr) {
  let count = {};
  let max = 0;
  let res = null;

  for (let v of arr) {
    count[v] = (count[v] || 0) + 1;
    if (count[v] > max) {
      max = count[v];
      res = v;
    }
  }
  return res;
}

// 3-masala
function multiplyOdds(arr) {
  return arr.map((n) => (n % 2 !== 0 ? n * 2 : n));
}

// 4-maslaa
function getPalindromes(arr) {
  return arr.filter((word) => {
    let r = word.split("").reverse().join("");
  });
}

// 5-masala
function wordsTwice(str) {
  let arr = str.split(" ");
  let count = {};
  for (let w of arr) count[w] = (count[w] || 0) + 1;
  return arr.filter((w) => count[w] === 2);
}

// 6-masala
function sortByLength(str) {
  return str.split(" ").sort(" ").join(" ");
}

// 7-masala
function firstLetters(str) {
  return str
    .split(" ")
    .map((w) => w[0])
    .join("");
}

// 8-masala
function squareDigits(str) {
  return str.replace(/\d/g, (d) => d * d);
}

// 9-masala
function startsWithVowel(str) {
  return str.split(" ").filter((w) => /^[vavvxbNBSFD]/.test(w));
}

// 10-masala
function increaseDigits(str) {
  return str.replace(/\d/g, (d) => Number(d) + 1);
}

// 11-masala
function reverseWordsInPlace(str) {
  return str
    .split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ");
}

// 12-masala
function equalLengthPairs(str) {
  let arr = str.split(" ");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length === arr[j].length) count++;
    }
  }
  return count;
}

// 13-masala
function difference(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}

// 14-masala
function groupByFirstLetter(arr) {
  let obj = {};
  for (let w of arr) {
    let c = w[0].toLowerCase();
    if (!obj[c]) obj[c] = [];
    obj[c].push(w);
  }
  return obj;
}

// 15-masala
function occurrenceList(arr) {
  let count = {};
  for (let v of arr) count[v] = (count[v] || 0) + 1;
  return arr.map((v) => `${v}(${count[v]})`);
}

// 16-masala
function nextGreater(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let next = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        next = arr[j];
        break;
      }
    }
    res.push(next);
  }
  return res;
}

// uya vazifa 
// 1-masala 
function transformAndSum(arr) {
  return arr
    .map(n => {
      n = Math.abs(n);        
      if (n % 2 === 0) n = n * n; 
    })
    .reduce((a, b) => a + b, 0);
}

// 2-masala 
function checkTwoArr(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// 3-masala 


// 4-masala 
function numberSplit(n) {
  let a = Math.floor(n / 2);
  let b = Math.ceil(n / 2);
  return [a, b];
}

// /5-masala 
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

// 6-maslaa 
function evenDoubleSorted(arr) {
  let evens = arr.filter(n => n % 2 === 0);
  evens = evens.map(n => n * 2);
  return evens.sort((a, b) => a - b);
}

// 7-masala 
function reverseImage(matrix) {
  return matrix
    .map(row => [...row].reverse())
    .reverse(); 
}

// 8-masala
function changeNumberToString(a, b) {
  const words = ["zero","one","two","three","four","five","six","seven","eight","nine"];

  let res = [];

  if (a <= b) {
    for (let i = a; i <= b; i++) res.push(words[i]);
  } else {
    for (let i = a; i >= b; i--) res.push(words[i]);
  }

  return res;
}

// 9-masala 
function addToArray(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  return arr;
}