function censorship(input) {
    let text = input[0];
    for (let i = 1; i < input.length; i++){
        let target = input[i];
        while (text.indexOf(target) > -1) {
            text = text.replace(target, '-'.repeat(target.length));
        }
    }

    console.log(text);
}
censorship(['roses are red, violets are blue', ', violets are', 'red']);