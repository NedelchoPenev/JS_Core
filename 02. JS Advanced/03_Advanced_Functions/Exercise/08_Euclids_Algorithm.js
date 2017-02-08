function euclidsAlgorithm(a, b) {
    return b ? euclidsAlgorithm(b, a % b) : a;
}
console.log(euclidsAlgorithm(252, 105));