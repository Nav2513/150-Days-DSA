function secondLargestElementInArrayWithoutSorting(arr) {
    let n = arr.length;
    let firstLargest;
    let secondLargest;
    let upgradeOne;
    let upgradeTwo;
    if (n == 1) {
        console.log("There is no second element exist");
    } else if (n == 2) {
        let SecondLargestNumber = Math.min(arr[0], arr[1]);
        return SecondLargestNumber;
    } else if (n >= 3) {
        for (let i = 0; i < n - 1; i++) {
            firstLargest = Math.max(arr[i], arr[i + 1]);
            secondLargest = Math.min(arr[i], arr[i + 1]);
            
            
        }
    }
}
console.log(secondLargestElementInArrayWithoutSorting([20, 100, 98, 12, 45]));
