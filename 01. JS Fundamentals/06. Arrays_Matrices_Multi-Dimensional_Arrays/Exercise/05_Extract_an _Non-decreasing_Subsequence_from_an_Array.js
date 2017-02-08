function subsequence(arr) {
    arr = arr.map(Number);
    let biggest = arr[0];
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= biggest){
            biggest = arr[i];
            newArr.push(biggest);
        }
    }
    return newArr.join('\n');
}
console.log(subsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));