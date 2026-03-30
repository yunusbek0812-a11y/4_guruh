console.log("Sardorbekdan salom")
console.log("Biz uddaladik")
let a =5;
console.log("2-misol")

// misol: Juft sonlarni saralash va ko‘paytirish
function processEvenNumbers(arr) {
      let result = [];

  // juft sonlarni yig‘ish
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  // saralash
  result.sort((a, b) => a - b);

  // 2 ga ko‘paytirish
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i] * 2;
  }

  return result;
}  

//Stringlarni uzunligi bo‘yicha saralash
function sortByLength(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {

            if (arr[j].length > arr[j + 1].length) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }

    return arr;
}



// Sonlarni stringga aylantirish
function changeNumberToString(start, end) {
    const arr = ["","one","two","three","four","five",
                 "six","seven","eight","nine","ten"];

    let result = [];

    for(let i = start; i <= end; i++){
        result.push(arr[i]);
    }

    return result;
}

// Har bir so‘zdagi unlilar sonini hisoblab, eng ko‘p unliga ega bo‘lgan so‘zni qaytaring.
function mostVowels(arr) {
    const vowels = "aeiou";

    let maxCount = 0;
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr[i].length; j++) {
            if (vowels.includes(arr[i][j].toLowerCase())) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            result = arr[i];
        }
    }

    return result;
}


// Sonni ikkiga bo‘lish
function numberSplit(n) {
    if (n % 2 === 0) {
        // juft
        return [n/2, n/2];
    } else {
        // toq
        let a = Math.floor(n / 2);
        let b = a + 1;
        return [a, b];
    }
}

//  Juft sonlarni saralash va ko‘paytirish
function processEvenNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }

    result.sort((a, b) => a - b);

    for (let i = 0; i < result.length; i++) {
        result[i] = result[i] * 2;
    }

    return result;
}

//  Arrayni bo‘lib chiqish
function addToArray(n) {
    let result = [];
    let temp = [];

    for (let i = 1; i <= n; i++) {
        temp.push(i);

        if (temp.length === 3) {
            result.push(temp);
            temp = [];
        }
    }

    // oxirida qolganlar bo‘lsa
    if (temp.length > 0) {
        result.push(temp);
    }

    return result;
}

//Musbat va juft sonlar bilan ishlash
function processArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num > 0 && num % 2 === 0) {
            sum += num * num;
        }
    }

    return sum;
}