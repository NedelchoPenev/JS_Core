function countOccurrence([targetStr, text]) {
    let count = 0;
    let index = text.indexOf(targetStr);

    while (index > -1){
        count++;
        index = text.indexOf(targetStr, index + 1);
    }

    return count;
}