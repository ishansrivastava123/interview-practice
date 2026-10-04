// Question: https://www.youtube.com/watch?v=03aQWws01bI

// Solution:

function zerosAtEnd(arr) {
  let zeros = 0;
  const output = arr.map((elem) => {
    if (elem === 0) {
      zeros++;
    } else {
      return elem;
    }
  })

  return [...output, ...Array(zeros).fill(0)];
  // return output + Array(zeros).fill(0);
}

function zerosAtEnd2(arr) {
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

console.log(zerosAtEnd2([1,0,2,0,3,0]))
