function matchAllWords([input]) {
    let arr = input.split(/\W+/).filter(w => w != '');
    console.log(arr.join('|'))
}
matchAllWords(['Some random words and letters and other things. ' +
'In a sentence, also there are some signs like + or ? ' +
'Sentences can also have semicolons; or dots. and !']);