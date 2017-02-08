function extractText([text]) {
    let newText = [];
    let startIndex = text.indexOf('(');
    while (startIndex > -1){
        let endIndex = text.indexOf(')', startIndex);
        if (endIndex == -1){
            break;
        }
        let snippet = text.substring(startIndex + 1, endIndex);
        newText.push(snippet);
        startIndex = text.indexOf('(', endIndex);
    }

    console.log(newText.join(', '))
}