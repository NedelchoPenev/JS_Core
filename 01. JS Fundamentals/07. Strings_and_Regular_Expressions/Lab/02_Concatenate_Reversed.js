function concatenateRevesed(input) {
    let concatenation = input.join('');
    let chars = Array.from(concatenation).reverse();
    let newStr = chars.join('');
    return newStr;
}