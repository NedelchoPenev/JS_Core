function fibonacciSequence(num) {
    let getNextFib = (function () {
        let first = 0;
        let prev = 1;
        
        return function () {
            let temp = first;
            first = prev;
            prev = temp + first;
            return first;
        }
    })();
    
    let sequence = [];
    for (let i = 0; i < num; i++){
        sequence.push(getNextFib())
    }

    return sequence
}
console.log(fibonacciSequence(15));