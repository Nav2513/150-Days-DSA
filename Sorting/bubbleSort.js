function bubbleSort(arr) {
 let length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let i = 0; i <= length -1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    length -= 1;
  }
  return arr;
}

console.log(bubbleSort([50, 10, 3, 9, 0, 100, 69]));


/*

Bubble Sort - Theory & Explanation
What is Bubble Sort?
Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is sorted.

How Bubble Sort Works?
Start from the beginning of the array.

Compare each pair of adjacent elements.

If the left element is greater than the right element, swap them.

Move to the next pair and repeat step 3.

After one full pass, the largest element moves to the correct position (end of the array).

Repeat the process for the remaining unsorted portion of the array.

Continue until no swaps are needed, meaning the array is sorted.


*/