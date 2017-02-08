function evenPosition(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            result += arr[i] + " ";
        }
    }
    return result;
}
console.log(evenPosition(['20', '30', '40']));