// Questions: https://www.youtube.com/watch?v=03aQWws01bI

// Solution1:
// ----------------------------------------------------------------

function zerosAtEnd(arr) {
  const numArr = [], zeroArr = [];
  arr.forEach((elem) => {
    if (elem === 0) {
      zeroArr.push(0);
    } else {
      numArr.push(elem);
    }
  })

  return [...numArr, ...zeroArr];
}

console.log(zerosAtEnd([1,0,2,0,3,0]))

// Solution 2:
// ----------------------------------------------------------------

function firstNonRepeating(str) {
  let obj = {};
  for(let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }

  for(let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }

  return null;
}

console.log(firstNonRepeating("geeksforgeeks"));

// Solution 3:
// ----------------------------------------------------------------

function reverseWords(str) {
  return (str.split(" ").reverse().join(" "));
}

console.log(reverseWords("I love JS"))

// Solution 4:
// ----------------------------------------------------------------

function arrChunk(arr, size) {
  let output = [], subArr = [], c = 1;
  
  arr.forEach((elem, i) => {
    subArr.push(elem);
    if (c === size) {
      output.push(subArr);
      c = 1;
      subArr = [];
    } else {
      c++;
    }
  })

  subArr.length ?  output.push(subArr) : null;

  return output;
}

console.log(arrChunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 3))
