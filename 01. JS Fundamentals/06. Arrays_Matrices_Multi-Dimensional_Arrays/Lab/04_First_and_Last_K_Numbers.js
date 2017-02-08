function firstAndLastNum(input) {
    let k = Number(input.shift());
    let first = input.slice(0, k);
    let last = input.slice(input.length - k, input.length);

    console.log(first.join(' '));
    console.log(last.join(' '));
}