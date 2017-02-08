function sortArray(arr) {
    arr.sort().sort((a, b) => a.length - b.length).forEach(p => console.log(p));
}
sortArray(['test',
    'Deny',
    'omen',
    'Default'
]);