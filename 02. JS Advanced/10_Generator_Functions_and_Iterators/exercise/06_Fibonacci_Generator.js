function* fibonacci() {
    let first = 0;
    let prev = 1;
    while (true){
        let temp = first;
        first = prev;
        prev = temp + first;
        yield first;
    }
}
let fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
