function secondLargestElementInArrayWithoutSorting(arr) {
   let largestNumber = -Infinity;
   let secondLargestNumber = -Infinity;
   
   for(let num of arr){
    if(num > largestNumber){
        secondLargestNumber = largestNumber;
        largestNumber = num;
    } else if(num > secondLargestNumber && num !== largestNumber){
        secondLargestNumber = num;
    }
   }
   return secondLargestNumber === -Infinity ? null : secondLargestNumber;
}
console.log(secondLargestElementInArrayWithoutSorting([20, 100, 98, 12, 45]));
