function countWords([text]) {
    let count = {};
    text = text.split(/\W+/).filter(w => w != "");
    for (let i = 0; i < text.length; i++){
        if (count[text[i]] == undefined){
            count[text[i]] = 1;
        } else {
            count[text[i]]++;
        }
    }
    return JSON.stringify(count);
}
console.log(countWords(["Far too slow, you're far too slow."]));