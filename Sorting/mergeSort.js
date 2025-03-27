function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let n = arr.length;
  let tempArr = Array(n);
  console.log("size and tempArr:", n, tempArr);

  for (let size = 1; size < n; size *= 2) {
    console.log("First loop !!");
    for (let leftStart = 0; leftStart < n - size; leftStart += 2 * size) {
      console.log("leftSta");

      let mid = leftStart + size - 1;
      let rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
      console.log("mid, rightEnd:", mid, rightEnd);
      merge(arr, tempArr, leftStart, mid, rightEnd);
    }
  }
  return arr;
}

function merge(arr, tempArr, leftStart, mid, rightEnd) {
  let i = leftStart,
    j = mid + 1,
    k = leftStart;

  while (i <= mid && j <= rightEnd) {
    tempArr[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++];
  }

  while (i <= mid) tempArr[k++] = arr[i++];
  while (j <= rightEnd) tempArr[k++] = arr[j++];

  for (let m = leftStart; m <= rightEnd; m++) {
    arr[m] = tempArr[m];
  }
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted array:", mergeSort(arr));
