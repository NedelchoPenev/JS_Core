function wordOccurence([text, word]) {
    word = `\\b${word}\\b`
    let regex = new RegExp(word, "gi")
    let count = 0;
    while (regex.test(text)){
        count++;
    }

    return count;
}