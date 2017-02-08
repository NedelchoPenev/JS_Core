function findVariable([text]) {
    let pattern = /\b_([A-Za-z0-9]+)\b/g;
    let match = pattern.exec(text);
    let matches = [];
    while (match){
        matches.push(match[1]);
        match = pattern.exec(text);
    }

    console.log(matches.join(","));
}
findVariable(['__invalidVariable _evenMoreInvalidVariable_ _validVariable'])