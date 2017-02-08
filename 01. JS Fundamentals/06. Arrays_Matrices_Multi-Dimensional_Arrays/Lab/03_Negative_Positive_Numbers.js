function negativeAndPositive(input) {
    let newArr = [];
    for (let num of input){
        if (num >= 0){
            newArr.push(num)
        } else {
            newArr.unshift(num)
        }
    }

    newArr.forEach(n => console.log(n));
}
negativeAndPositive(['3', '-2', '0', '-1']);