let solution = (function () {
    return {
        add: (arg1, arg2) => [arg1[0] + arg2[0], arg1[1] + arg2[1]],
        multiply: (arg, num) => [arg[0] * num, arg[1] * num],
        length: (arg) => Math.sqrt((arg[0] * arg[0]) + (arg[1] * arg[1])),
        dot: (arg1, arg2) => (arg1[0] * arg2[0]) + (arg1[1] * arg2[1]),
        cross: (arg1, arg2) => (arg1[0] * arg2[1]) - (arg1[1] * arg2[0])
    }
})();
console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));