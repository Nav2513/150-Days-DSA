function insertionsort(arr) {
    let n = arr.length;   
    for(let i = 0; i < n -1; i++){
        let pointerOne = arr[i];
        let pointerTwo = arr[i+1];
        let m = i;
        for(let j = m; j >= 0; j--){
            if(pointerOne > pointerTwo) {
            if(pointerOne > pointerTwo){
               [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
               i--;
                pointerOne--;
                pointerTwo--;
                console.log(arr);
            }
            else {
                pointerOne--;
                pointerTwo--;
            }
        }
        }
    }
    return arr;
}

console.log(insertionsort([50, 9, 2, 100, 60]));