function smallestNumbers(arr) {
    let smallest = arr.sort((a, b) => a-b).splice(0, 2);
    console.log(smallest.join(' '));
}
