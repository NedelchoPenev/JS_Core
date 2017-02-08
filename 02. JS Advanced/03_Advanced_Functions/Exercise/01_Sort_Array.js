function sortArray(arr, arg) {
    let ascending = function (a, b) {
        return a - b;
    };
    let descending = function (a, b) {
        return b - a;
    };

    let sortingStr = {
        'asc': ascending,
        'desc': descending
    };

    return arr.sort(sortingStr[arg]);
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));