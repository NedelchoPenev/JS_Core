function mapCounting([text]) {
    let count = new Map();
    text = text.toLowerCase().split(/\W+/).filter(w => w != '');

    for (let word of text){
        count.has(word) ? count.set(word, count.get(word) + 1) : count.set(word, 1);
    }

    let allWords = Array.from(count.keys()).sort();
    allWords.forEach(w => console.log(`'${w}' -> ${count.get(w)} times`));
}