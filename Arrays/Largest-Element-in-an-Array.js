function largestNumber(arr) {
  let n = arr.length;
  let temp = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > temp) {
      temp = arr[i];
    }
  }

  return temp;
}

console.log(largestNumber([20, 100, 98, 12, 45, 1]));

/*
        --- Largest number in the array ---

        Ex 1:  Input Data --> [20, 100, 98, 12, 45, 1]
        
        Output --> 100


*/
