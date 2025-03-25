function selectionSort(arr) {
  // Here we are getting array length
  let length = arr.length;

  /* In the first loop we are loop to whole array by the array length -1,
        And in the second loop we start loop by i+1, If jth element is smaller than minIndex element
        then we assign the jth element to minIndex element.
        In other condition We swap two element if the ith element is smaller than the minIndex than we apply swapping.
*/
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([10, 9, 55, 100, 1, 0]));

/*
        --- Selection Sort ---

Selection Sort is a simple and inefficient comparison-based sorting algorithm. It works by dividing the input array into two parts: a sorted section and an unsorted section. The algorithm repeatedly selects the smallest (or largest, depending on sorting order) element from unsorted section and swaps it with the first unsorted element, expanding the sorted section.


Steps of Selection Sort:

1. Start from the first element and assume it is the smallest.
2. Compare it with all the remaining elements to find the actual smallest element.
3. Swap the smallest element found with the first element.
4. Move to the next element and repeat the process for the remaining unsorted section.
5. Repeat until the entire array is sorted.


Time Complexity:

~ Best case: o(n2) (Even if the array is already sorted).
~ Worst case: o(n2)
~ Average case: o(n2)

Space Complexity:

~ O(1)

*/
