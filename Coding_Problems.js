const arr = [1, 2, 3, 4, 5];


for (let i = 0; i > arr.length; i++) {
    arr += arr[i];
}


console.log(arr)