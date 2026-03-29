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

